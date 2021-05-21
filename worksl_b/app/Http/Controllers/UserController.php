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


class UserController extends Controller
{
    public function Users(){
//        return User::join('company', 'users.company_id', '=', 'company.company_id')
//            ->join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
//            ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
//            ->select('users.id as userID', 'first_name', 'last_name', 'email', 'company.name', 'roles.name' )
//            ->get();
            return response()->json(User::get(),200);
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
                'user' => $user,
            ], Response::HTTP_OK);
        }
    }
    public function UpdateById(Request $request)
    {
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
            $user = User::find($request->id);
            $user->update($request->all());

            if($request['password']){
                $user->password = Hash::make($request['password']);
                $user->save();
            }
            return response([
                'messages' => 'success',
                'user' => $user,
            ], Response::HTTP_OK);
        }
    }
    public function UserDelete(Request $request) {
        $user = User::find($request->userID);
        $user->delete();
        return response(['messages' => 'success'], Response::HTTP_OK);
    }
}
