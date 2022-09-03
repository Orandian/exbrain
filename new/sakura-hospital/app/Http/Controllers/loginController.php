<?php

namespace App\Http\Controllers;

use App\Http\Requests\loginRequest;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class loginController extends Controller
{
    public function login()
    {
        if (session()->has("email")) {
            return redirect('/home');
        }
        return View("home.login");
    }

    public function loginCheck(loginRequest $request)
    {
        $request->session()->put("email", $request->input('email'));
        return redirect('/home');
    }

    public function locale($code)
    {
        App::setlocale($code);
        session()->put('locale', $code);

        return back();
    }
}
