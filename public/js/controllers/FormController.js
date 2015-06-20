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
            url: CONFIG.submitStickerPath,
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