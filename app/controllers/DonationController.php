<?php 

class DonationController extends BaseController {


	/**
	 * Collects input from giving page and creates customer
	 *
	 * @return redirect
	 */
	public function create() {

		$create_customer = Braintree_Customer::create([

			"firstName"       => Input::get('first_name'),
			"lastName"        => Input::get('last_name'),
			'email'           => Input::get('email_address'),
			"creditCard"      => [
			    "number"          => Input::get('card_number'),
			    "expirationMonth" => Input::get('expiration_month'),
			    "expirationYear"  => Input::get('expiration_year'),
			    "cvv"             => Input::get('cvv'),
			    "billingAddress"  => [
			        "postalCode"      => Input::get('postal_code'),
			        "streetAddress"   => Input::get('mailing_address'),
			        "locality"        => Input::get('city'),
			        "region"          => Input::get('state')
			    ]
			]

		]);

		$amount = Input::get('selector');

		if ($create_customer->success) {

			Log::info("creating a customer was a success");

			return Redirect::route('subscribeCustomer', ['customerId' => $create_customer->customer->id, 'amount' => $amount]);

		} else {

			echo("Validation errors:<br/>");

			foreach ($create_customer->errors->deepAll() as $error) {
			    echo("- " . $error->message . "<br/>");
			}

			echo("</br><a href='javascript:javascript:history.go(-1)'>Go Back</a>");

		}

	}


	/**
	 * Processes customer Id and amount desired, signs up 
	 * Customer to appropriate subscription plan.
	 *
	 * @return redirect
	 */
	public function subscribe($customerId, $amount) {

		Log::info("the subscribe method is being called");

		switch($amount) {
			case "5":
				$plan = 'fiveamonth';
				break;
			case "10":
				$plan = 'tenamonth';
				break;
			case "20":
				$plan = 'fiveaweek';
				break;
			case "40" : 
				$plan = 'tenaweek';
				break;
			case "50":
				$plan = 'fiftyamonth';
				break;
			case "80" : 
				$plan = 'eightyamonth';
				break;
			case "100":
				$plan = 'onehundredamonth';
				break;
			case "200":
				$plan = 'fiftyaweek';
			
		}

		try {

		    $customer = Braintree_Customer::find($customerId);
		    $payment_method_token = $customer->creditCards[0]->token;

		    $result = Braintree_Subscription::create(array(
		        'paymentMethodToken' => $payment_method_token,
		        'planId' => $plan
		    ));

		    if ($result->success) {
	
				return Redirect::route('thankyou');

		    } else {
		        echo("Validation errors:<br/>");
		        foreach (($result->errors->deepAll()) as $error) {
		            echo("- " . $error->message . "<br/>");
		        }
		    }
		} catch (Braintree_Exception_NotFound $e) {

			Log::error($e);

		    echo("Failure: no customer found with ID " . $customerId);

		}

	}	

	/**
	 * Route to the thank you page
	 * 
	 * @return View
	 */
	public function thanks() {

		return View::make('thanks');

	}

}