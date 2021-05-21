<?php

namespace App\Http\Controllers;

use App\Models\WorktimeModel;
use http\Message;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WorktimeController extends Controller
{
    public function Worktime() {
        return response()->json(WorktimeModel::get(),200);
    }
    public function WorktimeForUser() {
        return WorktimeModel:: where('users_id', Auth::user() ->getAuthIdentifier())
            -> get();
    }
    public function WorktimeById($worktime_id) {
        $worktime = WorktimeModel::find($worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        return response()->json($worktime,200);
    }
    public function WorktimeSave() {
//        $rules = [
////            'name' => 'required|min:1',
////            'address' => 'required|min:1',
//        ];
//        $validator = Validator::make($req->all(), $rules);
//        if($validator->fails()){
//            return response()->json($validator->errors(), 400);
//        }
        $users_id = Auth::user()->getAuthIdentifier();
        $date = date('Y-m-d');
        if($this->IfIsset($users_id, $date )){
            return response(['message' => 'that worktime already exist']);

        }else{
            $worktime = WorktimeModel::create([
                'date' => $date,
//                'time' => $req->input('time'),
//                'rest' => $req->input('rest'),
                'users_id' => Auth::user()->getAuthIdentifier(),
                ]);
            return response()->json($worktime,201);
        }
    }

    public function WorktimeEdit(Request $req) {
        $rules = [
//            'name' => 'min:1',
//            'type' => 'min:1',
//            'address' => 'min:1',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $worktime = WorktimeModel::find($req->worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $worktime->update($req->all());
        return response()->json('Updated',200);
    }

    public function WorktimeDelete(Request $req) {
        $worktime = WorktimeModel::find($req->worktime_id);
        if(is_null($worktime)){
            return response()-> json(['error' => true, 'message' => 'Not found'], 404);
        }
        $worktime->delete();
        return response()->json('Deleted',204);
    }
    private function IfIsset($users_id, $date): bool {
        $arr = WorktimeModel::where('users_id', $users_id)->where('date', $date)->get();
        if(isset($arr[0])){
            return true;
        }
        return false;
    }public function TimeCalculate(){
    $users_id = Auth::user()->getAuthIdentifier();
    $date = date('Y-m-d');

    $worktime = WorktimeModel::where('users_id', $users_id)
        ->where('date', $date)
        ->get('worktime_id');
    if(!isset($worktime[0])){
        return response(['Message' => $this->WorktimeSave()]);
    }else{
        $time = WorktimeModel::find($worktime[0]->worktime_id);
        $time-> time = $time->time + 1;
        $time->save();
    }

    return response()->json('Updated',200);
}


}
