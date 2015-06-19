app.directive('digitalInteraction', ['Interaction', function(Interaction) {

	return {

		restrict : 'E',

		template : '<div class="interaction-container">' +
			'<div class="interaction-inner-container">' +
				'<div class="equation-container">' +
					'<span class="equation-input">'+
						'<form ng-submit="store()">' +
						'<input type="text" id="di-user-input" autofocus maxlength="20" ng-model="text" ng-disabled="submitted">' +
						'</form>' +
					'</span>' +	
					'<div class="psa-list-container" id="psa-list-container" ng-style="{ opacity : submitted ? \'1\' : \'0\' }">' +
						'<span ap-text-resize ap-text-resize-font-size="90" class="psa" ng-repeat="submission in submissions" ng-style="{ \'transform\' : \'translate(0,\' + submission.offset + \'px )\' }" ng-class="{ \'faded\' : submission.active === false }">{{ submission.text }}</span>' +
					'</div>' +

					'<img src="../img/digital-interaction/di-logo.png">' +
					'<span class="equation-title">Abortion</span>' +
				'</div>' +
				'<h1 ng-style="{ opacity : submitted ? \'0\' : \'1\' }">Make your own PSA. <span class="yellow">How can you do better than abortion?</span> There is no wrong answer, go!</h1>' +
				'<h2 ng-style="{ opacity : submitted ? \'0\' : \'1\' }">It\'s easy! Just start typing,<br> press enter when you\'re done</h2>' +
				'<div class="di-share-container" ng-show="submitted">' +
					'<h3>Share the poster you made!</h3>' +
					'<i class="fa fa-twitter"></i><i class="fa fa-pinterest"></i><i class="fa fa-facebook"></i><i class="fa fa-link"></i>' +
					'<p>Just click/tap^ desired medium</p>' +
				'</div>' +
			'</div>' +
		'</div>',

		link : function($scope, element, attrs) {

			$scope.submitted = false;

			$scope.submissions = [];

			var threshold;
			var enabler;
			var reset;
			var baseActiveItemIndex;

			$scope.init = function() {

				getPreviousSubmissions();
				setScrollListener();
			
			}

			function getPreviousSubmissions() {

				Interaction.get().success(function(response) {

					$scope.submissions = response.data;

					baseActiveItemIndex = Math.floor($scope.submissions.length / 2);

					$scope.parseListItemDistances(baseActiveItemIndex);

				}).error(function(response) {

					console.log("there was an error");

				});

			}

			$scope.store = function() {

				var data = { text : $scope.text };
				var nanobar = new Nanobar({ bg : '#F9E400' });

				nanobar.go(60);

				Interaction.store(data).success(function(response) {

					var half = $scope.submissions.length / 2;
					$scope.submitted = true;

					$scope.text = '';

					$scope.submissions.splice(half, 0, response.data);

					baseActiveItemIndex = Math.floor($scope.submissions.length / 2);

					$scope.parseListItemDistances(baseActiveItemIndex);

					nanobar.go(100);

				}).error(function(response) {

					console.log("Sorry, there was an error");

					nanobar.go(100);

				});

			}

			$scope.parseListItemDistances = function(activeItemIndex) {

				var offsetAmount = 150;
				
				for (var i = 0; i < $scope.submissions.length; i++) {

					if (i < activeItemIndex) {

						$scope.submissions[i].offset = (activeItemIndex - i) * offsetAmount * -1;
						$scope.submissions[i].active = false;


					} else if(i > activeItemIndex) {

						$scope.submissions[i].offset = (i - activeItemIndex) * offsetAmount;
						$scope.submissions[i].active = false;

						
					} else if (i === activeItemIndex) {

						$scope.submissions[i].offset = 0;
						$scope.submissions[i].active = true;

						
					}

					
				}

			}

			function setScrollListener() {

				var listContainer = document.getElementById('psa-list-container');

				if (listContainer.addEventListener) {

					listContainer.addEventListener("mousewheel", scrollHandler, false);
					listContainer.addEventListener("DOMMouseScroll", scrollHandler, false);

				} else {

					listContainer.attachEvent("onmousewheel", scrollHandler);

				}

			}

			threshold = 30;
			enabler = false;
			reset = true;

			function scrollHandler(e) {

				var e = window.event || e; // old IE support
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

				if (Math.abs(e.wheelDelta) < threshold) {

					reset = true;

				} else if (Math.abs(e.wheelDelta) > threshold && enabler === false && reset === true) {

					enabler = true;
					reset = false;
					
					if (e.wheelDelta < 0) {

						baseActiveItemIndex++;

						$scope.parseListItemDistances(baseActiveItemIndex);

					} else {

						baseActiveItemIndex--;

						$scope.parseListItemDistances(baseActiveItemIndex);

					}


				} else if (Math.abs(e.wheelDelta) > threshold && enabler === true) {

					enabler = false;

				}

				$scope.$apply();

			}

			$scope.init();

		}

	}

}]);


app.directive('apTextResize', ['$window', function($window) {

	return {

		restrict : 'A',

		link : function($scope, element, attrs) {
						
			$scope.$watch('element.textContent', function() {

				calculateFontSize();

			});

			function calculateFontSize() {

				var width = element[0].offsetWidth;
				var maxWidth = width + 5;
				var stringLength;
				var letterSize;
				var adjustedFontSize;

				stringLength = element[0].textContent.length;
				fontSize = attrs.apTextResizeFontSize;
				letterSize = fontSize * 0.5;

				if (letterSize * stringLength > width) {

					adjustedFontSize = (width / stringLength) * 1.5;

					element[0].style.fontSize = adjustedFontSize + 'px';

					console.log(element[0].style.fontSize);

				}

				

			}


		}

	}

}]);