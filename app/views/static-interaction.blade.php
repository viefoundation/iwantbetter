@extends('layouts.master')

@section('content')

<div class="interaction-container">
	<div class="interaction-inner-container">
		<div class="equation-container">
			<span class="equation-input">
				
				<input type="text" id="di-user-input" maxlength="20" value="{{ $text }}">
				
			</span>	

			<img src="../img/digital-interaction/di-logo.png">
			<span class="equation-title">Abortion</span>
		</div>
		
	</div>
</div>

@stop