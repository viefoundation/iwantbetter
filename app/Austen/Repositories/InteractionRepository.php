<?php

namespace Austen\Repositories;

use Interaction;
use Log;

class InteractionRepository {


	public function getList()
	{

		try {
			
			$interactions = Interaction::orderBy('created_at', 'desc')->take(10)->get();

		} catch (Exception $e) {
			
			Log::error($e);

			return false;

		}

		return $interactions;

	}

	public function store($input) 
	{

		try {
			
			$text = $input['text'];
			$location = $this->processLocation();

			$interaction = new Interaction;
			$interaction->text = $text;
			$interaction->location = $location;
			$interaction->save();

		} catch (Exception $e) {
			
			Log::error($e);

			return false;	

		}

		return $interaction;

	}


	private function processLocation() 
	{

		$location = null;

		$ip = getenv('HTTP_CLIENT_IP') ? : getenv('HTTP_X_FORWARDED_FOR') ? : getenv('HTTP_X_FORWARDED') ? : getenv('HTTP_FORWARDED_FOR') ? : getenv('HTTP_FORWARDED') ? : getenv('REMOTE_ADDR');

		$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));

		if (property_exists($details, 'city') && property_exists($details, 'country')) {

			$location = $details->city . ', ' . $details->country;

		}

		return $location;

	}

}