<?php

use App\Http\Controllers\StudentController;
use Carbon\Factory;
use Faker\Factory as FakerFactory;
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
    // return "hello World";
});

Route::get('/userinfo', function () {
    $info = [
        "name" => 'John',
        'age' => 23,
        'married' => false
    ];

    return view('Home.home', ['user' => $info]);
});

// Route::get('/fakeData', function () {
//     $faker = FakerFactory::create();

//     return $faker->phoneNumber();
// });

Route::resource('/student', StudentController::class);
