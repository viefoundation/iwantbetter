<?php 

class DonationController extends BaseController {

	public function create() {

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

		if ($create_customer->success) {

			return Redirect::route('subscribeCustomer', ['customerId' => $result->customer->id, 'amount' => $amount]);

		} else {

			echo("Validation errors:<br/>");

			foreach (($result->errors->deepAll()) as $error) {
			    echo("- " . $error->message . "<br/>");
			}

			echo("</br><a href='javascript:javascript:history.go(-1)'>Go Back</a>");

		}

	}

	public function subscribe() {

		switch($amount) {
			case "$5":
				$plan = 'fiveaweek';
				break;
			case "$10":
				$plan = 'tenaweek';
				break;
			case "$20":
				$plan = 'twentyaweek';
				break;
			case "$50":
				$plan = 'fiftyaweek';
			case "$100":
				$plan = 'onehundredaweek';
				break;
			case "$200":
				$plan = 'twohundredaweek';
				break;
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