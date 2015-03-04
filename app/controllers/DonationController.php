<?php 

class DonationController extends BaseController {

	public function create() {

		try {
			
			$create_customer = Braintree_Customer::create([

				"firstName"       => Input::get('first_name'),
				"lastName"        => Input::get('last_name'),
				'email'           => Input::get('email_address'),
				"creditCard"      => [
				    "number"          => Input::get('number'),
				    "expirationMonth" => Input::get('month'),
				    "expirationYear"  => Input::get('year'),
				    "cvv"             => Input::get('cvv'),
				    "billingAddress"  => [
				        "postalCode"      => Input::get('postal_code'),
				        "streetAddress"   => Input::get('mailing_address'),
				        "locality"        => Input::get('city'),
				        "region"          => Input::get('state')
				    ]
				]

			]);

			$amount = Input::get('amount');

		} catch (Exception $e) {
			
			Log::error($e);

		}
		

		if ($create_customer->success) {

			return Redirect::route('subscribeCustomer', ['customerId' => $create_customer->customer->id, 'amount' => $amount]);

		} else {

			echo("Validation errors:<br/>");

			foreach ($create_customer->errors->deepAll() as $error) {
			    echo("- " . $error->message . "<br/>");
			}

			echo("</br><a href='javascript:javascript:history.go(-1)'>Go Back</a>");

		}

	}

	public function subscribe() {

		switch($amount) {
			case "$5":
				$plan = 'fiveamonth';
				break;
			case "$10":
				$plan = 'tenamonth';
				break;
			case "$20":
				$plan = 'fiveaweek';
				break;
			case "$40" : 
				$plan = 'tenaweek';
				break;
			case "$50":
				$plan = 'fiftyamonth';
				break;
			case "$80" : 
				$plan = 'eightyamonth';
				break;
			case "$100":
				$plan = 'onehundredamonth';
				break;
			case "$200":
				$plan = 'fiftyaweek';
			
		}

		try {

		    $customer = Braintree_Customer::find($customerId);
		    $payment_method_token = $customer->creditCards[0]->token;

		    $result = Braintree_Subscription::create(array(
		        'paymentMethodToken' => $payment_method_token,
		        'planId' => 'fiveaweek'
		    ));

		    if ($result->success) {
	
				// Redirect to thank you page.		       

		    } else {
		        echo("Validation errors:<br/>");
		        foreach (($result->errors->deepAll()) as $error) {
		            echo("- " . $error->message . "<br/>");
		        }
		    }
		} catch (Braintree_Exception_NotFound $e) {

		    echo("Failure: no customer found with ID " . $customerId);

		}


	}

	public function thanks() {

		return View::make('thanks');

	}

}