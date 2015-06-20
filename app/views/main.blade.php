@extends('layouts.master')

@section('content')

<div class="hamburger">
    <div class="patty"></div>
    <div class="patty"></div>
    <div class="patty"></div>
</div>

<img class="back-to-top" src="{{ asset('img/arrow-down-black.png') }}">

<nav ng-controller="NavController">
    <ul>
        <li><a href="#hero" ng-class="{viewing: atHero}">Diversity Video</a></li>               
        <li><a href="#paragraphs-background" ng-class="{viewing: atParagraphs}">Campaign Intro</a></li>
        <li><a href="#freesticker" ng-class="{viewing: atFooter}">Free Sticker</a></li>
    </ul>
</nav>

<div class="sidebar-info">
    <p class="version-info">V - 1.3</p>
    <p class="fine-print">Public Domain 2014 - {{ date('Y') }}</p>
</div>

<div class="video-container">

    <iframe id="hero-video" src="https://player.vimeo.com/video/131256671?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    
</div>

<div class="container">

    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="hero" id="hero">
       
        <div class="hero-content-container">
            <p class="heading uppercase"><span class="bold">Nobody really likes abortion</span>, so to be for something
                better should be a lot easier than it is.</p>
            
            <a href="#paragraphs-background"><div class="read-more-button"><p>READ MORE</p></div></a>
            <a href="https://vimeo.com/105067552" target="_blank"><div class="read-more-button" id="video-button"><p>GALLERY</p></div></a>
        </div>

        <div class="arrow-down"><img src="{{ asset('img/arrow-down.png') }}"></div>

        <div class="twitter-share-video-overlay"></div>
        <img class="twitter-share-video-text" src="{{ asset('img/tweet-text.svg') }}">

        <div class="twitter-share-video">
            <a href="https://twitter.com/share?url=http%3A%2F%2Fwww.vimeo.com%2F131256671&amp;text=A%20Better%20Way%20to%20Talk%20About%20Abortion." target="_blank" class="share-to-twitter"><i class="fa fa-twitter"></i></a>
        </div>

    </div>
    

    <!-- include paragraphs -->
    <div class="paragraphs-background" id="paragraphs-background">
        @include ('paragraphs')
    </div>


    
    <div class="paragraphs-section-progress"><span id="percentage">0</span>%</div>


    <div class="footer-container" id="freesticker" ng-controller="FormController">

        <div class="success-overlay" ng-show="successPrompt" ng-cloak>

            <div class="center">
                <p class="heading">Sticker Request Successfully Sent!</p>

                <p class="sub-heading">Would You like to hear from<br> I Want Better in the future?</p>

                <p class="choices"><span ng-click="subscribe()">YES</span> / <span ng-click="hideOverlay()">NO</span></p>
            </div>

        </div>

       {{--  <img src="img/iwb-logo.svg">
        <span class="image-description">- <span class="bold">A new campaign</span> privately developed for public use -</span>
 --}}
        <div class="footer" id="footer">

            <div class="form-container">

                <p class="tagline">Like what you see, Want a free sticker?</p>

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
                <p><a href="mailto:ilike@iwantbetter.org"></a>iwantbetter.org</p>
            </div>

            <div class="footer-links">
                <p><span class="bold"><a target="_blank" href=" {{ url('give') }} ">$</a></span> <span class="faded">|</span> <a href="mailto:ilike@iwantbetter.org">ILIKE@IWANTBETTER.ORG</a> <span class="faded">|</span> <a target="_blank" href="{{ url('style') }}">STYLE GUIDE</a> <span class="faded">|</span> <a target="_blank" href="{{ url('partners') }}">CORPORATE PARTNERSHIP</a> <span class="faded">|</span> <a target="_blank" href="{{ url('privacy') }}">PRIVACY POLICY</a> <span class="faded">|</span> <a target="_blank" href="{{ url('press') }}">PRESS RELEASE</a> <span class="faded">|</span> <a href="http://viefoundation.org" target="_blank">VIE</a> - <span class="faded">501(c)(3)NON PROFIT ORG.</span></p>
                <p><span class="bold">Public Domain 2014 - {{ date('Y') }}</span> - Free to Use by All.</p>
            </div>

        </div>

    </div>
    
</div>

<script type="text/javascript">
   var heroVideo = document.getElementById("hero-video");
    heroVideo.muted = true;
</script>

@stop


