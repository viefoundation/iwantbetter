<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>I WANT BETTER</title>
        <meta name="description" content="A Better Way to Talk About the Abortion Topic.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('apple-touch-icon-57x57.png') }}">
        <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('apple-touch-icon-114x114.png') }}">
        <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('apple-touch-icon-72x72.png') }}">
        <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('apple-touch-icon-144x144.png') }}">
        <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('apple-touch-icon-60x60.png') }}">
        <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('apple-touch-icon-120x120.png') }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('apple-touch-icon-76x76.png') }}">
        <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('apple-touch-icon-152x152.png') }}">
        <link rel="icon" type="image/png" href="{{ asset('favicon-196x196.png') }}" sizes="196x196">
        <link rel="icon" type="image/png" href="{{ asset('favicon-160x160.png') }}" sizes="160x160">
        <link rel="icon" type="image/png" href="{{ asset('favicon-96x96.png') }}" sizes="96x96">
        <link rel="icon" type="image/png" href="{{ asset('favicon-16x16.png') }}" sizes="16x16">
        <link rel="icon" type="image/png" href="{{ asset('favicon-32x32.png') }}" sizes="32x32">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="{{ asset('mstile-144x144.png') }}">
        <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
        <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script src="{{ asset('js/vendor/modernizr-2.6.2.min.js') }}"></script>
        <script src="{{ asset('js/vendor/angular.min.js') }}"></script>
    </head>
    <body ng-app="iwantbetter">

    	<div class="container">

    		@include('grid')

    	</div>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="{{ asset('js/vendor/velocity.min.js') }}"></script>

        <script>

        	var Posters = {

        		init : function() {
        			var _ = this;

        			$(".active").each(function() {
        				_.setClickListener($(this));
        				//_.setBackground($(this));
        			});

        		},

        		setClickListener : function($element) {
        			var _ = this;

        			$element.click(function() {

        				if ($(".grid-container").hasClass('shifted')) {
        					_.hide($(this));
        				} else {
        					_.show($(this));
        				}

        			});

        		},

        		setBackground : function($element) {

        			if ($element.attr('data-poster-path')) {

        				var imagePath = $element.attr('data-poster-path');

        				$element.attr('style', 'background-image:url(' + imagePath + ')')

        			}

        		},

        		show : function($element) {

        			$(".grid-container").velocity({right: '90%'}, 1500, 'easeOutExpo').addClass('shifted');

        		},

        		hide : function($element) {

        			$(".grid-container").velocity({right: '0%'}, 1500, 'easeOutExpo').removeClass('shifted');

        		}

        	}

        	var Squares = {

        		init : function() {
        			var _ = this;
        			_.gridContainerWidth = $(".grid-container").width();
        			_.largeHolderWidth = Math.floor(_.gridContainerWidth / 3.001);

        			_.larges();
        			_.squarify();
        			

        		},

        		larges : function() {
        			var _ = this;

        			$(".large-holder").each(function() {
        				$(this).outerWidth(_.largeHolderWidth, true);
        			});
        		},

        		squarify : function() {
        			$('.square').each(function() {
        				$(this).height($(this).width());
        			});
        		}
        	}

        	$(document).ready(function() {

        		Squares.init();
        		Posters.init();

        	});

        	$(window).resize(function() {

        		Squares.init();

        	});

        </script>
    </body>
</html>

