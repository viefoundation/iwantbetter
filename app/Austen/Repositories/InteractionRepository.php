<?php

namespace Austen\Repositories;

use Interaction;
use Log;
use JonnyW\PhantomJs\Client;

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

			$this->processScreenshot($interaction->id);

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

	private function processScreenshot($id)
	{

		$client = Client::getInstance();
		$client->setPhantomJs('../bin/phantomjs');
		$client->setPhantomLoader('../vendor/jonnyw/php-phantomjs/bin/phantomloader');
		$client->addOption('--load-images=true');
    	$client->addOption('--ignore-ssl-errors=true');

    	$url = url('/interaction/' . $id);
    
		$request  = $client->getMessageFactory()->createCaptureRequest($url);
	    $response = $client->getMessageFactory()->createResponse();
	    
	    $file = public_path() . '/img/interactions/' . mt_rand(1,999999999) . '.jpg';

	    $delay = 3;
	    $width  = 1920;
    	$height = 1280;
	    
	    $request->setCaptureFile($file);
	    $request->setCaptureDimensions($width, $height);
	    $request->setViewportSize($width, $height);
	    
	    $client->send($request, $response);

	    if($response->getStatus() === 200) {
            // Log::info($response->getContent());
            Log::info($file);
        }

        Log::info($response->getStatus());

	}

}