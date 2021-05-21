<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'http://127.0.0.1:8000/api/register',
        'http://127.0.0.1:8000/api/login',
        'http://127.0.0.1:8000/api/timecalculate',
        'http://127.0.0.1:8000/api/logout',
        'http://127.0.0.1:8000/api/update',
        'http://127.0.0.1:8000/api/updatebyid',
        'http://127.0.0.1:8000/api/userdelete',
        'http://127.0.0.1:8000/api/companies',
        'http://127.0.0.1:8000/api/company',
        'http://127.0.0.1:8000/api/worktime',
        'http://127.0.0.1:8000/api/salary',
        'http://127.0.0.1:8000/api/salarycreate',
        'http://127.0.0.1:8000/api/worktimeuser',
        'http://127.0.0.1:8000/api/salaryuser',
        'http://127.0.0.1:8000/api/salaryrefresh',
        'http://127.0.0.1:8000/api/send-mail',



    ];
}
