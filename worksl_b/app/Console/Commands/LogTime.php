<?php

namespace App\Console\Commands;

use App\Models\WorktimeModel;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\WorktimeController;

class LogTime extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'log:time';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for the login time';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users_id = Auth::user()->getAuthIdentifier();
//        if(Auth::user()){
//            WorktimeController::TimeCalculate();
            $users_id = Auth::user()->getAuthIdentifier();
            $date = date('Y-m-d');

            $worktime = WorktimeModel::where('users_id', $users_id)
                ->where('date', $date)
                ->get('worktime_id');
//            if(!isset($worktime[0])){
//                return response(['Message' => $this->WorktimeSave()]);
//            }else{
                $time = WorktimeModel::find($worktime[0]->worktime_id);
                $time-> time = $time->time + 1;
                $time->save();
//            }
//        }
        return 'not authorized';
    }
}
