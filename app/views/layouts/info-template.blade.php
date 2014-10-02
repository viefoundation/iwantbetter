<!DOCTYPE html >
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js info-html" > <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>I WANT BETTER</title>
        <meta name="description" content="A Better Way to Talk About the Abortion Topic.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
        <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196">
        <link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
        <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script src="{{ asset('js/vendor/modernizr-2.6.2.min.js') }}"></script>
    </head>

    <body class="info-body">
         <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <?php 

            $styles = [ 
                Request::is('give/*') || Request::path() == 'give' ? 'class="bold"' : '',
                Request::path() == 'style' ? 'class="bold"' : '',
                Request::path() == 'partners' ? 'class="bold"' : '',
                Request::path() == 'privacy' ? 'class="bold"' : '',
                Request::path() == 'press' ? 'class="bold"' : '',
            ];

            Request::is('give/*') || Request::path() == 'give' ? $header = "$" : '';
            Request::path() == 'style' ? $header = 'Style Guide' : '';
            Request::path() == 'partners' ? $header = 'Partners' : '';
            Request::path() == 'privacy' ? $header = 'Privacy' : '';
            Request::path() == 'press' ? $header = 'Press' : '';


        ?>

        <div class="info-hamburger">
            <div class="patty"></div>
            <div class="patty"></div>
            <div class="patty"></div>
        </div>

        <img class="back-to-top" src="{{ asset('img/arrow-down-black.png') }}">

        <nav>
            <ul>
                <li {{ $styles[0] }}>{{ link_to('give', "$") }}</li>
                <li {{ $styles[1] }}>{{ link_to('style', 'Style Guide')}}</li>
                <li {{ $styles[2] }}>{{ link_to('partners', 'Corporate Partners') }}</li>
                <li {{ $styles[3] }}>{{ link_to('privacy', "Privacy Policy")}} </li>
                <li {{ $styles[4] }}>{{ link_to('press', 'Press Release') }}</li>
                <li><a href="http://www.viefoundation.org">VIE</a></li>
            </ul>
        </nav>

        <div class="info-container">
            <div class="info-nav">
                <ul>
                    <li {{ $styles[0] }}>{{ link_to('give', "$") }}</li>
                    <li {{ $styles[1] }}>{{ link_to('style', 'Style Guide')}}</li>
                    <li {{ $styles[2] }}>{{ link_to('partners', 'Corporate Partners') }}</li>
                    <li {{ $styles[3] }}>{{ link_to('privacy', "Privacy Policy")}} </li>
                    <li {{ $styles[4] }}>{{ link_to('press', 'Press Release') }}</li>
                    <li><a href="http://www.viefoundation.org">VIE</a></li>
                </ul>

                <p class="info-header">{{ $header }}</p>

            </div>

            @yield('content')

        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="{{ asset('js/vendor/angular.min.js') }}"></script>
        <script src="{{ asset('js/vendor/velocity.min.js') }}"></script>
        <script src="{{ asset('js/vendor/jquery.arbitrary-anchor.js') }}"></script>
        <script src="{{ asset('js/main.js') }}"></script>
        <script>

            $(document).ready(function() {

                InfoNav.init();

            });

        </script>
        
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>