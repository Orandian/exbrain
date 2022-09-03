<?php

use App\Http\Controllers\appointmentController;
use App\Http\Controllers\drugController;
use App\Http\Controllers\homeController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\messageController;
use App\Http\Controllers\roomController;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Routing\Annotation\Route as AnnotationRoute;

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

Route::get('/home/logout', [homeController::class, "logout"]);

Route::get('/login', [loginController::class, "login"]);

Route::post('loginCheck', [loginController::class, "loginCheck"]);

Route::get('/doctorlist', function () {
    return view('home.doctorlist');
});

Route::resource('room', roomController::class);

Route::resource('drug', drugController::class);

Route::resource('message', messageController::class);

Route::resource('appointment', appointmentController::class);

Route::resource('home', homeController::class);

Route::get('lang/{code}', [loginController::class, "locale"]);
