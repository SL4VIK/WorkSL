<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request){
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' =>Hash::make($request->input('password')),
        ]);

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

        $cookie = cookie('jwt', $token, 60*24);

        return response([
            'messages' => 'Success',
            'token' => $token,
        ])->withCookie($cookie);
    }

    public function user(){
        return Auth::user();
    }
    public function logout(){
        $cookie = Cookie::forget('jwt');

         return response([
             'message' => 'Success'
         ])->withCookie($cookie);
    }
    public function Update(Request $request)
    {
        $user = Auth::user();
        $rules =[
            'first_name' => ['string','min:3', 'max:255'],
            'last_name' => ['string','min:3', 'max:255'],
            'email' => ['string','min:6', 'max:600', 'unique:App\Models\User'],
            'password' => ['string','min:6', 'max:600'],
        ];
        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response([$validator->errors()], Response::HTTP_BAD_REQUEST);
        } else {
            $user->update($request->all());

            if($request['password']){
                $user->password = Hash::make($request['password']);
                $user->save();
            }
            return response([
                'messages' => 'success',
                $user,
            ], Response::HTTP_OK);
        }
    }
}