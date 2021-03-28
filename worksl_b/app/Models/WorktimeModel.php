<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorktimeModel extends Model
{
    use HasFactory;
    protected $primaryKey = 'worktime_id';
    public $timestamps = false;
    protected $table = "worktime";
    protected $fillable = [
        'worktime_id',
        'date',
        'time',
        'rest',
        'users_id',
    ];
}
