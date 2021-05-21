<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);

Route::group(['middleware' => ['auth:sanctum', 'role:user|admin|company_admin']], function () {
    Route::post('salary',[\App\Http\Controllers\SalaryController::class, 'SalarySave']);
    Route::put('timecalculate',[\App\Http\Controllers\WorktimeController::class, 'TimeCalculate']);
    Route::get('user', [\App\Http\Controllers\AuthController::class, 'user']);
    Route::post('worktime',[\App\Http\Controllers\WorktimeController::class, 'WorktimeSave']);
    Route::put('update', [\App\Http\Controllers\UserController::class, 'Update']);
    Route::get('salary/{salary_id}',[\App\Http\Controllers\SalaryController::class, 'SalaryById']);
    Route::post('salary',[\App\Http\Controllers\SalaryController::class, 'SalarySave']);
    Route::get('send-mail', [\App\Http\Controllers\BLController::class, 'Mail']);
    Route::get('worktimeuser',[\App\Http\Controllers\WorktimeController::class, 'WorktimeForUser']);
    Route::get('salaryuser',[\App\Http\Controllers\SalaryController::class, 'SalaryForUser']);
    Route::post('salaryrefresh',[\App\Http\Controllers\SalaryController::class, 'Salarysave']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|company_admin']], function () {
    Route::get('worktime',[\App\Http\Controllers\WorktimeController::class, 'Worktime']);
    Route::get('worktime/{worktime_id}',[\App\Http\Controllers\WorktimeController::class, 'WorktimeById']);
    Route::put('worktime',[\App\Http\Controllers\WorktimeController::class, 'WorktimeEdit']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {
    Route::get('users', [\App\Http\Controllers\UserController::class, 'Users']);
    Route::put('updatebyid', [\App\Http\Controllers\UserController::class, 'UpdateById']);
    Route::delete('userdelete', [\App\Http\Controllers\UserController::class, 'UserDelete']);
    Route::delete('worktime',[\App\Http\Controllers\WorktimeController::class, 'WorktimeDelete']);
    Route::get('salary',[\App\Http\Controllers\SalaryController::class, 'Salary']);
    Route::get('companies',[\App\Http\Controllers\CompanyController::class, 'Companies']);
    Route::get('company/{company_id}',[\App\Http\Controllers\CompanyController::class, 'CompanyById']);
    Route::post('company',[\App\Http\Controllers\CompanyController::class, 'CompanySave']);
    Route::put('company',[\App\Http\Controllers\CompanyController::class, 'CompanyEdit']);
    Route::delete('company',[\App\Http\Controllers\CompanyController::class, 'CompanyDelete']);
    Route::put('salary',[\App\Http\Controllers\SalaryController::class, 'SalaryEdit']);
    Route::delete('salary',[\App\Http\Controllers\SalaryController::class, 'SalaryDelete']);
    Route::post('salarycreate',[\App\Http\Controllers\SalaryController::class, 'SalaryCreate']);

});

