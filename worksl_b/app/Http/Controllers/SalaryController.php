<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalaryModel;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class SalaryController extends Controller
{
    public function Salary() {
        return response()->json(SalaryModel::get(),200);
    }
    public function SalaryById($salary_id) {
        $salary = SalaryModel::find($salary_id);
        if(is_null($salary)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        return response()->json($salary,200);
    }
    public function SalarySave(Request $req) {
        $month = date('m');
        $user_id = Auth::user()->getAuthIdentifier();
        $date = DB::table('worktime')
                ->whereMonth('date', $month)
                ->where('users_id', $user_id)
                ->SUM('time');
        $cost = DB::table('salary')
                ->where('users_id', $user_id)
                ->get();
                $cost_ph = $cost[0]->cost_ph;
                $sal = $cost_ph * $date/60;
            $a = SalaryModel::find($cost[0]->salary_id);
            $a-> total_hours = round($date/60, 3);
            $a-> salary = round($sal, 3);
            $a-> save();
    }

    public function SalaryEdit(Request $req, $salary_id) {
        $rules = [
            'cost_ph' => 'min:1',
            'total_hours' => 'min:1',
            'salary' => 'min:1',
            'month' => 'date|min:1',
            'users_id' => 'min:1',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $salary = SalaryModel::find($salary_id);
        if(is_null($salary)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $salary->update($req->all());
        return response()->json('Updated',200);
    }

    public function SalaryDelete(Request $req, $salary_id) {
        $salary = SalaryModel::find($salary_id);
        if(is_null($salary)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $salary->delete();
        return response()->json('Deleted',204);
    }
}
