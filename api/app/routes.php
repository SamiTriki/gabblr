<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('api/me', array('before' => 'auth', 'uses' => 'UserController@getUser'));
Route::put('api/me', array('before' => 'auth', 'uses' => 'UserController@updateUser'));

Route::post('api/auth/login', 'AuthController@login');
Route::post('api/auth/signup', 'AuthController@signup');

Route::get('api/users/{id}', 'UsersController@getUserById');

// Route::get('{angular?}', [ 'uses' => 'HomeController@index' ])->where('angular', '.*');