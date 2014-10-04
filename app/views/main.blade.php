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
    </head>
    <body ng-app="iwantbetter">

        <div class="hamburger">
            <div class="patty"></div>
            <div class="patty"></div>
            <div class="patty"></div>
        </div>

        <img class="back-to-top" src="{{ asset('img/arrow-down-black.png') }}">

        <nav ng-controller="NavController">
            <ul>
                <li><a href="#hero" ng-class="{viewing: atHero}">Gallery Video</a></li>               
                <li><a href="#paragraphs-background" ng-class="{viewing: atParagraphs}">Read More</a></li>
                <li><a href="#footer-container" ng-class="{viewing: atFooter}">For You</a></li>
            </ul>
        </nav>

        <div class="sidebar-info">
            <p class="version-info">V - 1.1</p>
            <p class="fine-print">Public Domain 2014</p>
        </div>

        <div class="video-container">
            <video id="walkthrough-video" autoplay loop muted>
                <source src="{{ asset('img/walkthrough.mp4') }}" type="video/mp4">
                <source src="{{ asset('img/walkthrough.ogv') }}" type="video/ogg">
                Your browser does not support this video. Please upgrade to a modern browser.
            </video>
            
        </div>

        <div class="container">

            <!--[if lt IE 7]>
                <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->

            <div class="hero" id="hero">
               
                <div class="hero-content-container">
                    <p class="heading uppercase"><span class="bold">Nobody really likes abortion</span>, so to be for something
                        better should be alot easier than it is.</p>
                    
                    <a href="#paragraphs-background"><div class="read-more-button"><p>READ MORE</p></div></a>
                    <a href="https://vimeo.com/105067552" target="_blank"><div class="read-more-button" id="video-button"><p>GALLERY</p></div></a>
                </div>

                <div class="arrow-down"><img src="{{ asset('img/arrow-down.png') }}"></div>

                <div class="twitter-share-video-overlay"></div>
                <img class="twitter-share-video-text" src="{{ asset('img/tweet-text.svg') }}">

                <div class="twitter-share-video">
                    <a href="https://twitter.com/share?url=http%3A%2F%2Fwww.vimeo.com%2F105067552&amp;text=A%20Better%20Way%20to%20Talk%20About%20Abortion." target="_blank" class="share-to-twitter"><i class="fa fa-twitter"></i></a>
                </div>

            </div>
            
            <!-- include paragraphs -->
            <div class="paragraphs-background" id="paragraphs-background">
                @include ('paragraphs')
            </div>
            
            <div class="paragraphs-section-progress"><span id="percentage">0</span>%</div>


            
            <div class="footer-container" id="footer-container" ng-controller="FormController">

                <div class="success-overlay" ng-show="successPrompt">

                    <div class="center">
                        <p class="heading">Sticker Request Successfully Sent!</p>

                        <p class="sub-heading">Would You like to hear from<br> I Want Better in the future?</p>

                        <p class="choices"><span ng-click="subscribe()">YES</span> / <span ng-click="hideOverlay()">NO</span></p>
                    </div>

                </div>

                <img src="img/iwb-logo.svg">
                <span class="image-description">- <span class="bold">A new campaign</span> privately developed for public use -</span>

                <div class="footer" id="footer">

                    <div class="form-container" >

                        <p class="tagline">Like what you see, Want a sticker?</p>

                        <form ng-submit="submit()">
                            <p><input class="inputs" type="text" name="full_name" placeholder="Full Name" ng-model="submission.fullName" required></p>
                            <p><input class="inputs" type="text" name="address" placeholder="Shipping Address" ng-model="submission.address" required></p>
                            <p><input class="inputs" type="text" name="address_2" placeholder="City St. Zip Country" ng-model="submission.address2" required></p>
                            <p class="submit-line"><input class="email-input" type="text" name="email" placeholder="Email Address" ng-model="submission.email" required>
                            <button type="submit">Yes, <span>Please!</span><div class="slanted-line"></div></button></p>
                        </form>

                       

                    </div>

                    <div class="call-to-action">
                        <p class="letter-tape">&nbsp;&nbsp;<span class="regular">Be Inspired.</span>&nbsp;</p><br>
                        <p class="letter-tape">&nbsp;&nbsp;Use Information.&nbsp;</p><br>
                        <p class="letter-tape">&nbsp;&nbsp;Inspire Others.&nbsp;</p>
                        <p><a href="mailto:ilike@iwantbetter.org"></a>www.iwantbetter.org</p>
                    </div>

                    <div class="footer-links">
                        <p><span class="bold"><a target="_blank" href=" {{ url('give') }} ">$</a></span> <span class="faded">|</span> <a href="mailto:ilike@iwantbetter.org">ILIKE@IWANTBETTER.ORG</a> <span class="faded">|</span> <a target="_blank" href="{{ url('style') }}">STYLE GUIDE</a> <span class="faded">|</span> <a target="_blank" href="{{ url('partners') }}">CORPORATE PARTNERSHIP</a> <span class="faded">|</span> <a target="_blank" href="{{ url('privacy') }}">PRIVACY POLICY</a> <span class="faded">|</span> <a target="_blank" href="{{ url('press') }}">PRESS RELEASE</a> <span class="faded">|</span> VIE - <span class="faded">501(c)(3)NON PROFIT ORG.</span></p>
                        <p><span class="bold">Public Domain 2014</span> - Free to Use by All.</p>
                    </div>

                </div>

            </div>
            

           

        </div>
        

        
 
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="{{ asset('js/vendor/angular.min.js') }}"></script>
        <script src="{{ asset('js/vendor/velocity.min.js') }}"></script>
        <script src="{{ asset('js/vendor/nanobar.min.js') }}"></script>
        <script src="{{ asset('js/plugins.js') }}"></script>
        <script>

            var app = angular.module('iwantbetter', []);

            app.controller('FormController', function($scope, $http) {


                $scope.successPrompt = false;

                $scope.submit = function() {

                    var nanobar = new Nanobar({
                        bg : '#F9E400'
                    });

                    nanobar.go(45);

                    var newStickerRequest = {

                        fullName : $scope.submission.fullName,
                        address : $scope.submission.address,
                        address2 : $scope.submission.address2,
                        email : $scope.submission.email

                    }

                    $http({

                        method: 'POST',
                        url: '{{ route("submitStickerForm") }}',
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                        data: $.param(newStickerRequest)

                    }).success(function() {

                        nanobar.go(70);
                        nanobar.go(100);
                        $scope.successPrompt = true;

                    }).error(function(data) {

                        console.log(data.error);

                    });

                };

                $scope.subscribe = function() {

                    var newSubscriber = {

                        fullName : $scope.submission.fullName,
                        address : $scope.submission.address,
                        address2 : $scope.submission.address2,
                        email : $scope.submission.email

                    }

                    $http({

                        method: 'POST',
                        url: '{{ route("subscribe") }}',
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                        data: $.param(newSubscriber)

                    }).success(function() {

                        $scope.hideOverlay();

                    }).error(function(data) {

                        console.log(data.error);

                    });

                }

                $scope.hideOverlay = function() {

                    $scope.successPrompt = false;
                    $scope.submission = {};

                }


            });
        </script>
        <script src="{{ asset('js/main.js') }}"></script>


        
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
