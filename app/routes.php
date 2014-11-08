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

Route::get('/', function()
{
	return View::make('main');
});



Route::post('sticker', ['as' => 'submitStickerForm', 'uses' => 'FormController@submit']);
Route::post('subscribe', ['as' => 'subscribe', 'uses' => 'FormController@subscribe']);


Route::get('give', function() {

	return View::make('give');

});

Route::post('give/customer', ['as' => 'addCustomer', 'uses' => 'DonationController@create']);
Route::get('give/subscribe/{customerId}/{amount}', ['as' => 'subscribeCustomer', 'uses' => 'DonationController@subscribe']);
Route::get('give/thankyou', ['as' => 'thankyou', 'uses' => 'DonationController@thanks']);
	


Route::get('partners', function() {

	return View::make('partners');

});

Route::get('privacy', function() {

	return View::make('privacy');

});

Route::get('press', function() {

	return View::make('press');

});


Route::get('style', function() {

	return View::make('style');

});






