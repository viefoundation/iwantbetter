<?php


class FormController extends BaseController {

	public function submit() {

		$full_name = Input::get('fullName');
		$address = Input::get('address');
		$address2 = Input::get('address2');
		$email = Input::get('email');

		try {

			$order = new StickerOrder;
			$order->full_name = $full_name;
			$order->address = $address;
			$order->address_2 = $address2;
			$order->email = $email;
			$order->save();

		} catch (Exception $e) {

			return Response::json([
				'error' => App::environment()
			], 404);

		}


		Mail::queue('emails.newOrder', ['name' => $full_name, 'address1' => $address, 'address2' => $address2, 'email' => $email], function($message) {
		    
		    $message->to('ilike@iwantbetter.org', 'I Want Better')->cc('austenpayan@gmail.com')->subject('New Sticker Order!');

		});


		return Response::json([

		], 200);
	}


	public function subscribe() {

		$full_name = Input::get('fullName');
		$address = Input::get('address');
		$address2 = Input::get('address2');
		$email = Input::get('email');

		try {

			$subscriber = new Subscriber;
			$subscriber->full_name = $full_name;
			$subscriber->address = $address;
			$subscriber->address_2 = $address2;
			$subscriber->email = $email;
			$subscriber->save();

		} catch (Exception $e) {

			return Response::json([
				'error' => $e
			], 404);

		}

		return Response::json([

		], 200);
	}

}