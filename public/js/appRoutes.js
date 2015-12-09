(function(angular){
	angular.module('appRoutes').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
		$routeProvider

			.when('/', {
	            templateUrl: 'views/home.html',
	            controller: 'MainController',
	            controllerAs: 'mainCtrl'
		    })

			.when('/module-pattern', {
				templateUrl: 'views/module-pattern-view.html',
				controller: 'ModulePatternController',
				controllerAs: 'modulePatternCtrl'
			})

			.otherwise({
		        redirectTo: '/'
		    });

		$locationProvider.html5Mode(true);
	}])		
})(window.angular);
