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



Route::get('companies',[\App\Http\Controllers\CompanyController::class, 'Companies']);
Route::get('company/{company_id}',[\App\Http\Controllers\CompanyController::class, 'CompanyById']);
Route::post('company',[\App\Http\Controllers\CompanyController::class, 'CompanySave']);
Route::put('company/{company_id}',[\App\Http\Controllers\CompanyController::class, 'CompanyEdit']);
Route::delete('company/{company_id}',[\App\Http\Controllers\CompanyController::class, 'CompanyDelete']);
//Route::get('companyuser/{company_id}',[\App\Http\Controllers\CompanyController::class, 'CompanyUser']);
Route::get('salary',[\App\Http\Controllers\SalaryController::class, 'Salary']);
Route::get('salary/{salary_id}',[\App\Http\Controllers\SalaryController::class, 'SalaryById']);
Route::post('salary',[\App\Http\Controllers\SalaryController::class, 'SalarySave']);
Route::put('salary/{salary_id}',[\App\Http\Controllers\SalaryController::class, 'SalaryEdit']);
Route::delete('salary/{salary_id}',[\App\Http\Controllers\SalaryController::class, 'SalaryDelete']);

Route::get('worktime',[\App\Http\Controllers\WorktimeController::class, 'Worktime']);
Route::get('worktime/{worktime_id}',[\App\Http\Controllers\WorktimeController::class, 'WorktimeById']);
//Route::post('worktime',[\App\Http\Controllers\WorktimeController::class, 'WorktimeSave']);
Route::put('worktime/{worktime_id}',[\App\Http\Controllers\WorktimeController::class, 'WorktimeEdit']);
Route::delete('worktime/{worktime_id}',[\App\Http\Controllers\WorktimeController::class, 'WorktimeDelete']);



Route::middleware('auth:sanctum')->group(function () {
    Route::post('salary',[\App\Http\Controllers\SalaryController::class, 'SalarySave']);
    Route::post('worktime',[\App\Http\Controllers\WorktimeController::class, 'WorktimeSave']);
    Route::put('timecalculate',[\App\Http\Controllers\WorktimeController::class, 'TimeCalculate']);
    Route::get('user', [\App\Http\Controllers\AuthController::class, 'user']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::put('update', [\App\Http\Controllers\AuthController::class, 'Update']);

    Route::get('/send-mail', function(){
        $details = [
            'title' =>'Its time to have rest',
            'body' =>'You  are working to long',
        ];
    Mail::to('termenator2001@gmail.com')->send(new \App\Mail\WorkMail($details));
    echo 'Email has been sent';
    });

});

//Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {
//    Route::get('userPerm', [\App\Http\Controllers\AuthController::class, 'test1']);
//});
//
//Route::group(['middleware' => ['auth:sanctum', 'role:user|admin']], function () {
//    Route::get('adminPerm', [\App\Http\Controllers\AuthController::class, 'test2']);
//

//});
