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
        <script src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
        <script>    

            var CONFIG = {

                page : '{{ Route::currentRouteName() }}',
                submitStickerPath : '{{ route("submitStickerForm") }}'

            }

        </script>
    </head>
    <body ng-app="iwantbetter">




        @yield('content')



        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <script src="{{ asset('js/vendor/velocity.min.js') }}"></script>
        <script src="{{ asset('js/vendor/nanobar.min.js') }}"></script>
        <script src="{{ asset('js/plugins.js') }}"></script>                    
        <script src="{{ asset('production/app.js') }}"></script>

    
       <script>
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

         ga('create', 'UA-46881632-3', 'auto');
         ga('send', 'pageview');

       </script>
    </body>
</html>
