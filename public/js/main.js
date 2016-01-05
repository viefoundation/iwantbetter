
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


function mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else {
		return false;
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

var ShareIcons = {

	init : function() {
		var _ = this;

		_.setHover();
	},

	setHover : function() {
		var _ = this;

		$(".share-icon").hover(function() {

			_.shareAnimation($(this), 'in');
		}, function() {
			_.shareAnimation($(this), 'out');
		});

	},

	shareAnimation : function(element, direction) {
		// NOTE : changed $elem.closest('.square') to $elem.closest('.share-fill-container')
		// to deal with pinterest sharing specific to v 1.2. Will need to figure out solution
		// for original grid use when the time comes.


		var $elem = element;
	
		if(direction == 'in') {


			if ($elem.attr('data-share-to') == 'twitter') {

				var fill = $elem.parent().find('.share-fill-twitter');
				$elem.siblings('.tweet-share-title').stop().fadeIn('fast');

			} else
			if ($elem.attr('data-share-to') == 'pinterest') {

				var fill = $elem.parent().find('.share-fill-pinterest');
				$elem.siblings('.pin-share-title').stop().fadeIn('fast');

			}
				
			fill.stop().addClass('share-fill-enlarge');
			// $elem.siblings('.share-title').stop().fadeIn('fast');
			
		} else 
		if (direction == 'out') {

			if ($elem.attr('data-share-to') == 'twitter') {
				var fill = $elem.parent().find('.share-fill-twitter');
				$elem.siblings('.tweet-share-title').stop().fadeOut('fast');
			} else
			if ($elem.attr('data-share-to') == 'pinterest') {
				var fill = $elem.parent().find('.share-fill-pinterest');
				$elem.siblings('.pin-share-title').stop().fadeOut('fast');
			}

			fill.stop().removeClass('share-fill-enlarge');
			// $elem.siblings('.share-title').stop().fadeOut('fast');
		}

	}

}

var Posters = {

	init : function() {
		var _ = this;

		$(".active").each(function() {
			_.setClickListener($(this));
			_.setBackground($(this));
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

		var photo = $element.attr('data-poster-path');

		$(".grid-container").velocity({right: '90%'}, 1500, 'easeOutExpo').addClass('shifted');
		$("#full-poster-image").attr('src', photo);

	},

	hide : function($element) {

		$(".grid-container").velocity({right: '0%'}, 1500, 'easeOutExpo').removeClass('shifted');

	}

}

var Svg = {

	init : function() {
		var _ = this;

		_.animate();
	},

	animate : function() {

		var $paths = $(".st2");

		$paths.each(function() {

			var element = $(this).get(0);

			var length = element.getTotalLength();

			element.style.transition = element.style.WebkitTransition ='none';
			
			element.style.strokeDasharray = length + ' ' + length;
			element.style.strokeDashoffset = length;

			element.getBoundingClientRect();
			//element.style.transition = element.style.WebkitTransition = 'all .1s linear';
			//element.style.strokeDashoffset = '0';

			$(window).scroll(function() {

				if( parseInt(element.style.strokeDashoffset, 10) > 0 ) {

					element.style.strokeDashoffset = length - $(window).scrollTop();

				}
					
			});

		});
	
	}

}

var Nav = {

	// Called in main.blade.php
	init : function() {
		var _ = this;

		_.listeners($(".hamburger"));
		_.positionTracking();
		_.smoothScroll();

	},

	smoothScroll : function() {
		var _ = this;

		$('a[href*=#]').bind('click', function() {
		    
			_.hide();

		    var target = $(this).attr("href");

		    var distance = $(target).offset().top - $(target).parent().offset().top + $(target).parent().scrollTop();
		    	
		    $('.container').stop().animate({ scrollTop: distance }, 400, function() {
		        location.hash = target; 
		    });



		    return false;

		});

	},

	listeners : function(element) {
		var _ = this;

		element.click(function() {

			if ($(".container").hasClass('shifted')) {
				_.hide();
			} else {
				_.show();
			}

		});

		$('.container').scroll(function() {
			var windowHeight = $(window).height();

			if ($(this).scrollTop() > (windowHeight - 20)) {
				$(".patty").addClass('dark');
			} else if(!$(".container").hasClass('shifted')){
				$(".patty").removeClass('dark');
			}
		})

	},

	contrastCheck : function() {
		var windowHeight = $(window).height();
		
		console.log($('.container').scrollTop());

		if ($(".container").scrollTop() > (windowHeight - 20)) {
			$(".patty").addClass('dark');
		} else {
			$(".patty").removeClass('dark');
		}

	},

	show : function() {
		var _ = this;

		$(".container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		$(".video-container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		$(".patty").addClass('dark');
		_.morph('show');
		$(".container").on('click', function(event) {
			_.hide();
			$(this).off(event);
		});
	},

	hide : function() {
		var _ = this;

		$(".container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		$(".video-container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		_.contrastCheck();
		_.morph('hide');
	},

	morph : function(action) {

		if(action == 'show') {
			$(".patty:first-child").addClass('tilt-up');
			$(".patty:nth-child(2)").hide();
			$(".patty:last-child").addClass('tilt-down');
		} else if(action == 'hide') {
			$(".patty:first-child").removeClass('tilt-up');
			$(".patty:nth-child(2)").show();
			$(".patty:last-child").removeClass('tilt-down');
		}

	},

	

	positionTracking : function() {
		
		var _ = this;

		var sectionOne = $(".hero");
		var sectionTwo = $(".paragraphs-background");
		var sectionThree = $(".footer-container");
		var sectionOneStart = sectionOne.position().top;
		var sectionOneEnd = sectionOneStart + sectionOne.height();
		var sectionTwoStart = sectionTwo.position().top;
		var sectionTwoEnd = sectionTwoStart + sectionTwo.height();
		var sectionThreeStart = sectionThree.position().top;
		var sectionThreeEnd = sectionThreeStart + sectionThree.height();

		// Retrieve the scope from the angular controller NavController,
		// it is currently controlling the nav link styles.
		var element = document.querySelector('[ng-controller=NavController]');
		var $scope = angular.element(element).scope();

		if (mobile()) {
			var bottomMargin = sectionThreeStart;
		} else {
			var bottomMargin = $('.container').get(0).scrollHeight - $(window).height();
		}

		_.scrollPosition($('.container'),bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart);

		$(".container").scroll(function() {

			_.scrollPosition($(this),bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart);

		});

	},

	scrollPosition : function($container, bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart) {

		var scrolled = $container.scrollTop();
		var offset = 100;
		
		if(scrolled >= (sectionOneStart) && scrolled <= (sectionOneEnd - offset)) {

		    $scope.$apply(function() {
		        $scope.atHero = true;
		        $scope.atParagraphs = false;
		        $scope.atFooter = false;
		    });

		} else 
		if (scrolled >= (sectionTwoStart - offset) && scrolled < bottomMargin ) {

			$scope.$apply(function() {
			    $scope.atHero = false;
			    $scope.atParagraphs = true;
			    $scope.atFooter = false;
			});

		} else
		if (scrolled >= bottomMargin) {

			$scope.$apply(function() {
			    $scope.atHero = false;
			    $scope.atParagraphs = false;
			    $scope.atFooter = true;
			});

		}

	}
}

var InfoNav = {

	init : function() {
		//called seperately in info-template view file
		var _ = this;

		_.listeners($(".info-hamburger"));

	},

	listeners : function(element) {
		var _ = this;

		element.click(function() {

			if ($(".info-container").hasClass('shifted')) {
				_.hide();
			} else {
				_.show();
			}

		});

	},

	show : function() {
		var _ = this;

		$(".info-container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		_.morph('show');
	},

	hide : function() {
		var _ = this;

		$(".info-container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		_.morph('hide');
	},

	morph : function(action) {

		if(action == 'show') {
			$(".patty:first-child").addClass('tilt-up');
			$(".patty:nth-child(2)").hide();
			$(".patty:last-child").addClass('tilt-down');
		} else if(action == 'hide') {
			$(".patty:first-child").removeClass('tilt-up');
			$(".patty:nth-child(2)").show();
			$(".patty:last-child").removeClass('tilt-down');
		}

	}
}

var Walkthrough = {

	init : function() {
		var _ = this;

		//_.smartPause();
		if(!mobile()) {
			_.parallaxActivate();
			_.smartPause();	
		}

		_.twitter();
		
	},

	video : document.getElementById('walkthrough-video'),

	smartPause : function() {
		var _ = this;
		var heroHeight = $(".hero").height();

		$(".container").scroll(function() {

			if($(this).scrollTop() > heroHeight && !_.video.paused) {
				
				_.video.pause();

			} else if($(this).scrollTop() < heroHeight && _.video.paused ) {
				
				_.video.play();

			}

		});
	},

	parallax : function() {
		var _ = this;
		var heroHeight = $(".hero").height();
		var block = $(".hero-content-container");
		var bottomValue = parseInt(block.css('bottom'),10);
		
			if($(".container").scrollTop() < heroHeight) {
				var distance = $('.container').scrollTop() * 0.5;

				block.css('transform', 'translateY(' + distance + 'px)');
				
			}

		requestAnimationFrame(Walkthrough.parallax);
		
	},

	parallaxActivate : function() {
		var _ = this;
		
        requestAnimationFrame(Walkthrough.parallax);

	},

	twitter : function() {

		$(".twitter-share-video").hover(function() {
			$(".twitter-share-video-text").fadeIn('fast');
			$(".twitter-share-video-overlay").addClass('twitter-share-video-overlay-enlarge');

		}, function() {
			$(".twitter-share-video-text").fadeOut('fast');
			$(".twitter-share-video-overlay").removeClass('twitter-share-video-overlay-enlarge');
		});

	}

}

var Paragraphs = {

	init : function() {
		var _ = this;

		_.progressIndicator();
		_.highlightsActivate();

	},

	progressIndicator : function() {
		var section = $(".paragraph-section");
		var position = section.position();
		var height = section.height() - ($(window).height() / 2);
		var counter = $(".paragraphs-section-progress");

		$(".container").scroll(function() {
			var fromTop = $(this).scrollTop();
			
			var percentage = (fromTop - (position.top / 2)) / height;
			var parsedPercentage = Math.round(percentage.toFixed(2) * 100);

			if(parsedPercentage < 0) {
				var insert = 0;
				counter.fadeOut('fast');
			} else if(parsedPercentage > 100) {
				var insert = 100;
				counter.fadeOut('fast');
			} else {
				var insert = parsedPercentage;
				counter.fadeIn('fast');
			}

			$("#percentage").html(insert);
			
		});

	},

	highlightedSections : $(".highlight"),

	windowHeight : $(window).height(),

	highlights : function() {

		var _ = this;

		Paragraphs.highlightedSections.each(function() {


			if ($(this).offset().top < Paragraphs.windowHeight / 6.667 && $(this).offset().top > -20 ) {

				$(this).css('background-color', 'yellow');

			} else {

				$(this).css('background-color', 'transparent');

			}

		});

		requestAnimationFrame(Paragraphs.highlights);

	},	

	highlightsActivate : function() {

		requestAnimationFrame(Paragraphs.highlights);

	}

}

var Twitter = {

	init : function() {
		var _ = this;

		_.popup();
	},

	popup : function() {

		$('.share-to-twitter').click(function() {

			var url = $(this).attr('href');

			window.open(url,"", "height=500px, width=500px");

			return false;

		});

	}

}

var Pinterest = {

	init : function() {
		var _ = this;

		_.popup();

	},

	popup : function() {

		$(".share-to-pinterest").click(function() {

			var url = $(this).attr('href');

			window.open(url,"", "height=500px, width=500px");

			return false;

		});

	}

}

var Footer = {

	// Called in main.blade.php
	init : function() {
		var _ = this;

		if(!mobile()) {

			setTimeout(function(){
				requestAnimationFrame(Footer.slideUp);
			}, 500);
			

		}

	},
	footer : $(".footer"),
	footerHeight : $(".footer").height(),
	

	slideUp : function() {
		var containerHeight = $(".container").get(0).scrollHeight;
		var scrolled = $(".container").scrollTop();
		var activatePoint = containerHeight - (Footer.footerHeight / 4) - $(window).height();

		if (scrolled > activatePoint) {

			var distance = scrolled - (containerHeight - (containerHeight - activatePoint));
			var moveBy = 500 - (distance * 4);

			if (moveBy > 0) {

			}

			Footer.footer.css('transform', 'translateY(' + moveBy + 'px)');

		}

		if (scrolled < activatePoint) {

			Footer.footer.css('transform', 'translateY(500px)');

		}

		requestAnimationFrame(Footer.slideUp);

	}

}




/**
 * iOS overflow scrollToTop v0.1
 * https://github.com/prud/ios-overflow-scroll-to-top
 */

 var ScrollTop = {

 	init : function() {
 		var _ = this;

 		_.visible();
 	},

 	visible : function() {

 		$(".container").scroll(function() {

 			if($(this).scrollTop() > $(window).height()) {

 				$(".back-to-top").fadeIn();

 			} else {

 				$(".back-to-top").fadeOut();
 			}

 		});

 	}

 }

 

 var headerEl = document.querySelector('.back-to-top');

 var scrollToTop = function(el) {

   el = typeof el === 'object' ? el : document.querySelector(el);
   if (!el) { return; }

   var offset = el.scrollTop;
   if (offset === 0) { return; }

   //el.style.overflow = 'hidden'; // stops momentum scrolling
   var stepSize = offset / (offset < 1000 ?  15 : 30);

   var _animate = function() {

     el.scrollTop -= stepSize;

     if (el.scrollTop > 0) { // keep scrolling up
       setTimeout(_animate, 10);
     }
     else { // enough
       _onFinish();
     }
   };

   var _onFinish = function() {
    // el.style.overflow = 'scroll'; 
     
   };

   _animate();
 };


if (CONFIG.page === 'home') {

	headerEl.addEventListener('click', function() {
		window.scrollToTop('.container');
	});

}

 


function measureText(txt, font) {
    var id = 'text-width-tester',
        $tag = $('#' + id);
    if (!$tag.length) {
        $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
        $('body').append($tag);
    } else {
        $tag.css({font:font}).html(txt);
    }
    return {
        width: $tag.width(),
        height: $tag.height()
    }
}

function shrinkToFill(input, fontSize, fontWeight, fontFamily) {
    var $input = $(input),
        txt = $input.val(),
        maxWidth = $input.width() + 5, // add some padding
        font = fontWeight + " " + fontSize + "px " + fontFamily;
    // see how big the text is at the default size
    var textWidth = measureText(txt, font).width;
    if (textWidth > maxWidth) {
        // if it's too big, calculate a new font size
        // the extra .9 here makes up for some over-measures
        fontSize = fontSize * maxWidth / textWidth * .9;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        // and set the style on the input
        $input.css({font:font});
    } else {
        // in case the font size has been set small and 
        // the text was then deleted
        $input.css({font:font});
    }
}


$(document).ready(function() {

	if (CONFIG.page === 'home' || CONFIG.page === 'di-home') {

		ShareIcons.init();
		Squares.init();
		Posters.init();
		Nav.init();
		Walkthrough.twitter();
		Paragraphs.init();
		Twitter.init();
		Pinterest.init();
		Footer.init();
		// ScrollUp.init();
		ScrollTop.init();

	}

	
	if (CONFIG.page === 'digital-interaction') {

		$("#di-user-input").keyup(function() {
			
	        shrinkToFill(this, '90', "", "Open Sans, sans-serif");
	    });

	}

	if (CONFIG.page === 'interaction.show') {

		shrinkToFill($("#di-user-input"), '90', "", "Open Sans, sans-serif")

	}
	
});

$(window).resize(function() {

	//Squares.init();

});