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

Route::get('me', array('before' => 'auth', 'uses' => 'UserController@getAuth'));
Route::put('me', array('before' => 'auth', 'uses' => 'UserController@update'));

Route::post('auth/login', 'AuthController@login');
Route::post('auth/signup', 'AuthController@signup');

Route::get('users/{id}', 'UserController@show');

Route::get('users/{id}/gabs', 'GabController@user');
Route::get('gabs/{id}', 'Cabcontroller@show');
Route::post('users/{id}/gabs', array('before' => 'auth|loggedUser', 'uses' => 'GabController@store'));


Route::post('gabs/{gab_id}/likes/{id}', array('before' => 'auth|loggedUser', 'uses' => 'LikeController@store'));
Route::delete('gabs/{gab_id}/likes/{id}', array('before' => 'auth|loggedUser', 'uses' => 'LikeController@destroy'));


Route::get('gabs', array('before' => 'auth', 'uses' => 'GabController@showAll'));
