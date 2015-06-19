app.factory('Interaction', ['$http', function($http) {

	return {

		get : function() {

			return $http.get('/interaction');

		},

		store : function(data) {

			return $http.post('/interaction', data);

		}

	}

}]);