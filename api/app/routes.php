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
Route::post('api/auth/facebook', 'AuthController@facebook');
Route::post('api/auth/foursquare', 'AuthController@foursquare');
Route::post('api/auth/github', 'AuthController@github');
Route::post('api/auth/google', 'AuthController@google');
Route::post('api/auth/linkedin', 'AuthController@linkedin');
Route::get('api/auth/twitter', 'AuthController@twitter');
Route::get('api/auth/unlink/{provider}', array('before' => 'auth', 'uses' => 'AuthController@unlink'));

Route::get('{angular?}', [ 'uses' => 'HomeController@index' ])->where('angular', '.*');