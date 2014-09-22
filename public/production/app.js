// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var app = angular.module('iwantbetter', []);

app.controller('FormController', function($scope, $http) {


	$scope.successPrompt = false;

	$scope.submit = function() {

		var newStickerRequest = {

			fullName : $scope.submission.fullName,
			address : $scope.submission.address,
			address2 : $scope.submission.address2,
			email : $scope.submission.email

		}

		$http({

			method: 'POST',
			url: 'sticker',
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
			data: $.param(newStickerRequest)

		}).success(function() {

			$scope.successPrompt = true;

		}).error(function(data) {

			console.log("something went wrong : " + data.error);

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
			url: 'subscribe',
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
			data: $.param(newSubscriber)

		}).success(function() {

			$scope.hideOverlay();

		}).error(function(data) {

			console.log("something went wrong");

		});

	}

	$scope.hideOverlay = function() {

		$scope.successPrompt = false;
		$scope.submission = {};

	}


});


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


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

		var $elem = element;
	
		if(direction == 'in') {

			if ($elem.attr('data-share-to') == 'twitter') {
				var fill = $elem.closest('.square').find('.share-fill-twitter')
			} else
			if ($elem.attr('data-share-to') == 'pinterest') {
				var fill = $elem.closest('.square').find('.share-fill-pinterest')
			}
			
			
			fill.stop().addClass('share-fill-enlarge');
			
		} else 
		if (direction == 'out') {

			if ($elem.attr('data-share-to') == 'twitter') {
				var fill = $elem.closest('.square').find('.share-fill-twitter')
			} else
			if ($elem.attr('data-share-to') == 'pinterest') {
				var fill = $elem.closest('.square').find('.share-fill-pinterest')
			}

			fill.stop().removeClass('share-fill-enlarge');
		}

	}

}

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

	init : function() {
		var _ = this;

		_.listeners($(".hamburger"));

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

			if ($(this).scrollTop() > windowHeight) {
				$(".patty").addClass('dark');
			} else {
				$(".patty").removeClass('dark');
			}
		})

	},

	contrastCheck : function() {
		var windowHeight = $(window).height();
		
		console.log($('.container').scrollTop());

		if ($(".container").scrollTop() > windowHeight) {
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

	}

}

var Walkthrough = {

	init : function() {
		var _ = this;

		_.smartPause();
		_.parallaxActivate();
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

	}

}

var Paragraphs = {

	init : function() {
		var _ = this;

		_.progressIndicator();
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





$(document).ready(function() {
	//ShareIcons.init();
	//Squares.init();
	//Posters.init();
	//Svg.init();
	Nav.init();
	Walkthrough.init();
	Paragraphs.init();
	Twitter.init();

    
});

$(window).resize(function() {

	//Squares.init();

});