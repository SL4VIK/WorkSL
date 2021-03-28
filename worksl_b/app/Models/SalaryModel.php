<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalaryModel extends Model
{
    use HasFactory;
    protected $primaryKey = 'salary_id';
    public $timestamps = false;
    protected $table = "salary";
    protected $fillable = [
        'salary_id',
        'cost_ph',
        'total_hours',
        'salary',
        'month',
        'users_id',
    ];
}
