<?php

namespace App\Http\Controllers;

use App\Models\WorktimeModel;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WorktimeController extends Controller
{
    public function Worktime() {
        return response()->json(WorktimeModel::get(),200);
    }
    public function WorktimeById($worktime_id) {
        $worktime = WorktimeModel::find($worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        return response()->json($worktime,200);
    }
    public function WorktimeSave(Request $req) {
        $rules = [
//            'name' => 'required|min:1',
//            'address' => 'required|min:1',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        return Auth::user()->getAuthIdentifier();
        $user = auth()->user();
        return  $user;
        $date = date('Y-m-d');
        if($this->IsIsset($users_id, $date )){
            return response(['message' => 'that container already exist in house']);
            $worktime = WorktimeModel::create($req->all());
            return response()->json($worktime,201);
    }}

    public function WorktimeEdit(Request $req, $worktime_id) {
        $rules = [
//            'name' => 'min:1',
//            'type' => 'min:1',
//            'address' => 'min:1',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $worktime = WorktimeModel::find($worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $worktime->update($req->all());
        return response()->json('Updated',200);
    }

    public function WorktimeDelete(Request $req, $worktime_id) {
        $worktime = WorktimeModel::find($worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $worktime->delete();
        return response()->json('Deleted',204);
    }
    private function IsIsset($users_id, $date): bool {
        $arr = WorktimeModel::where('users_id', $users_id)->where('date', $date)->get();
        if(isset($arr[0])){
            return true;
        }
        return false;
    }
}
