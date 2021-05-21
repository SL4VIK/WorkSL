<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompanyModel;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function Companies() {
        return response()->json(CompanyModel::get(),200);
    }
    public function CompanyById($company_id) {
        $company = CompanyModel::find($company_id);
        if(is_null($company)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        return response()->json($company,200);
    }
    public function CompanySave(Request $req) {
        $rules = [
            'name' => 'required|min:1',
            'address' => 'required|min:1',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $shelf = CompanyModel::create($req->all());
        return response()->json($shelf,201);
    }

    public function CompanyEdit(Request $request) {
        $rules = [
            'name' => 'min:1',
            'type' => 'min:1',
            'address' => 'min:1',
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $company = CompanyModel::find($request->company_id);
        if(is_null($company)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $company->update($request->all());
        return response()->json('Updated',200);
    }

    public function CompanyDelete(Request $request) {
        $company = CompanyModel::find($request->company_id);
        if(is_null($company)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $company->delete();
        return response()->json('Deleted',204);
    }

//    public function CompanyUser($company_id) {
//        $company = CompanyModel::find($company_id);
//        if(is_null($company)){
//            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
//        }
//        return response()->json($company->user, 200);
//    }
}
