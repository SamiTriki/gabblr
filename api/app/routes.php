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

Route::get('me', array('before' => 'auth', 'uses' => 'UserController@getUser'));
Route::put('me', array('before' => 'auth', 'uses' => 'UserController@updateUser'));

Route::post('auth/login', 'AuthController@login');
Route::post('auth/signup', 'AuthController@signup');

Route::get('users/{id}', 'UserController@getUserById');

Route::get('users/{id}/gabs', 'GabController@getGabs');
Route::post('users/{id}/gabs/{content}', 'GabController@newGab');
