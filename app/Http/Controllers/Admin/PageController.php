<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
// use App\Models\Auth;
use App\Models\User;


class PageController extends Controller
{
    public function showLogin()
    {
        return view('admin.login');
    }

    public function login()
    {
        request()->validate([
            'email' => "required|email",
            'password' => "required"
        ]);

        $cre = request()->only('email', 'password');
        if(Auth::guard('admin')->attempt($cre)){
            // return Auth::guard('admin')->user();
            return redirect('/admin')->with('success','Welcome Admin');
        }
        return redirect()->back()->with('error','Email and Password dont match');
    }

    public function logout()
    {
        auth()->guard('admin')->logout();
        return redirect('/');
    }

    public function showDashboard()
    {
        return view('admin.dashboard');
    }
}
