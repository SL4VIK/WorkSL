<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/send-mail', function(){
    $details = [
        'title' =>'Its time to have rest',
        'body' =>'You  are working to long',
    ];
Mail::to('termenator2001@gmail.com')->send(new \App\Mail\WorkMail($details));
echo 'Email has been sent';
});

    


