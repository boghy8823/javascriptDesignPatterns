(function(angular){
	angular
	.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		
		$routeProvider

		.when('/', {
	            templateUrl: 'home/home.html',
	            controller: 'MainController'
	    })

		.when('/module-pattern', {
			templateUrl: 'module_pattern/module-pattern-view.html',
			controller: 'ModulePatternController'
		});

		$locationProvider.html5Mode(true);
	}])	
})(window.angular);
