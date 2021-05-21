<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequests\RegisterPostRequest;
use Cookie;
use App\Models\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;



class AuthController extends Controller
{
    public function register(Request $request){
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'company_id' => $request->input('company_id'),
            'password' => Hash::make($request->input('password')),
        ]);
        $user->assignRole('user');
        return $user;
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response([
                'message' => 'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60*24, '/', '', false, true, 1, 'none');

        return response([
            'messages' => 'Success',
            'token' => $token,
        ])->withCookie($cookie);
    }

    public function user(){
        return User:: where('id', Auth::user() ->getAuthIdentifier())
            ->join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->first();
    }

    public function logout(Request $request)
    {
        $cookie = Cookie::forget('jwt');
        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
