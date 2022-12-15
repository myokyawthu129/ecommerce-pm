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

Route::get('/','PageController@home');
Route::get('/product/{slug}', 'ProductController@detail');

// Route::get('/', 'Admin\PageController@showDashboard');
Route::get('/admin/login','Admin\PageController@showLogin');
Route::post('/admin/login','Admin\PageController@login');

// Route::post('/admin/logout','PageController@logout');

Route::group(['prefix'=>"admin",'namespace'=>"Admin",'middleware' => ['Admin']],function(){
    Route::get('/','PageController@showDashboard');

    Route::post('/logout','PageController@logout');

    Route::resource('/category', CategoryController::class);
    Route::resource('/product', ProductController::class);
    Route::get('/create-product-add/{slug}','ProductController@createProductAdd');
    Route::post('/create-product-add/{slug}','ProductController@storeProductAdd');
    Route::get('/product-add-transaction','ProductController@productAddTransaction');
    Route::post('product-upload','ProductController@imageUpload');
});
