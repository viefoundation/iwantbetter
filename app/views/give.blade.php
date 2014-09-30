@extends ('layouts.info-template')

@section ('content')

<div class="giving-container">
	<div class="column-left">
		<h2> You must really want to give if you have found this section!</h2>
		<p>I Want Better subtly tucked this section away to try and keep from distracting the user, it’s only for the avid anyway.</p>	
		<p>Thank you for wanting to help. Here you can sign up for monthly giving or tap the link for one time donation options through PayPal -</p>
		<p>You can adjust or cancel your monthly giving at anytime. Email any of your needs to - </p>
		<p><span class="green">If you need anything-</span> <br> <a href="mailto:ilike@iwantbetter.org"><span class="email">ilike@iwantbetter.org</span></a></p>
		<p>I WANT BETTER is currently managed by: VIE - 501(c)(3) Non Profit Organization</p>
		<p>All contributions are tax-deductible.</p>


	</div>
	<div class="column-right">
		  <form action="{{ route('addCustomer') }}" method="POST" id="braintree-payment-form" class="form_style">
		    <p class="give-name">
		      <label>Name</label>
		      <input tabindex=1 type="text" name="first_name" id="first_name" value="Full Name" onfocus="if (this.value=='Name') this.value='';" placeholder="Full Name"></input>
		    </p>
		    <p class="give-email">
		      <label for="email_address">Email Address</label>
		      <input tabindex=2 placeholder="Email Address" type="text" name="email_address" id="email_address" value="Email Address" onfocus="if (this.value=='Email Address') this.value='';"></input>
		    </p>
		    <p class="give-card">
		      <label>Card Number</label>
		      <input tabindex=3 placeholder="Credit Card Number" type="text" size="20" id="card_number" autocomplete="off" data-encrypted-name="number" value="Credit Card Number" onfocus="if (this.value=='Credit Card Number') this.value='';"/>
		    </p>
		    <p class="give-expires">
		      <label id="exp">Exp.</label>
		      <input tabindex=4 placeholder="MM" type="text" size="2" id="expiration_month" data-encrypted-name="month" value="MM" onfocus="if (this.value=='00') this.value='';"/> / <input tabindex=5 placeholder="YYYY" type="text" size="4" data-encrypted-name="year"  id="expiration_year" value="YYYY" onfocus="if (this.value=='00') this.value='';"/>
		    </p>
		    <p class="give-cvv">
		      <label>CVV</label>
		      <input tabindex=6 placeholder="CVV" type="text" size="4" id="cvv" autocomplete="off" data-encrypted-name="cvv" value="CVV" onfocus="if (this.value=='CCV') this.value='';"/>
		    </p>
		    <p class="give-amount" id="amount">
		      <select id="selector" name="selector">
		        <option selected="selected">
		          $5
		        </option>
		        <option>
		          $10
		        </option>
		        <option>
		          $20
		        </option>
		      </select>
		      <span>(Tap to Adjust)</span> - A MONTH
		    </p>
		    <p class="amount_text">Reoccuring donations debited from account on the 1st of each month hereafter. <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3ZGCWQKXS7ATQ" class="bold">Click here for one time donation</a></p>
		    <p class="give-address">
		      <label for="mailing_address">Mailing Address</label>
		      <input tabindex=7 placeholder="Mailing Address" type="text" name="mailing_address" id="mailing_address" value="Mailing Address" onfocus="if (this.value=='Mailing Address') this.value='';"></input>
		    </p>
		    
		    <p class="give-city">
		      <label for="city">City</label>
		      <input tabindex=8 placeholder="City" type="text" name="city" id="city" value="City" onfocus="if (this.value=='City') this.value='';"></input>
		    </p>
		    <p class="give-state">
		      <label for="state">State</label>
		      <input tabindex=9 placeholder="State"type="text" name="state" id="state" value="State" onfocus="if (this.value=='State') this.value='';"></input>
		    </p>
		    
		    <p class="give-zip">
		      <label for="postal_code">Postal Code</label>
		      <input tabindex=10 placeholder="Zip" type="text" name="postal_code" id="postal_code" value="Zip" onfocus="if (this.value=='Zip') this.value='';"></input>
		    </p>
		    <p class="amount_text">Address collected for mailing year end statements.</p>
		    
		    <input class="submit-button" type="submit" id="submit_button" value="Contribute"/>
		  		 
		</form>
	</div>
</div>



@stop