<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyModel extends Model
{
    use HasFactory;
    protected $primaryKey = 'company_id';
    public $timestamps = false;
    protected $table = "company";
    protected $fillable = [
        'company_id',
        'name',
        'type',
        'address',
    ];
}
