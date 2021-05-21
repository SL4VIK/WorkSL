<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\WorktimeModel;
use Illuminate\Support\Facades\Mail;


class BLController extends Controller
{
    public function Mail(Request $req) {
        $user_id = Auth::user()->getAuthIdentifier();
        $userMail = User::
        where('id',$user_id )
            ->first();
        $date = date('Y-m-d');
        $worktime = WorktimeModel::
            where('users_id',$user_id )
            ->where('date',$date )
            ->first();
        if($worktime->time == 300 || $worktime->time == 600){
            $details = [
                'title' =>'Its time to have rest',
                'body' =>'You  are working to long',
            ];
            Mail::to($userMail->email)->send(new \App\Mail\WorkMail($details));
        }
    }
}
