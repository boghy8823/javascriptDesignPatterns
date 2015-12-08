angular.module('ModulePattern', []);

angular.module('MainCtrl', []);

angular.module('appRoutes', []);

angular.module('javascriptsDesignPatterns',[
		'ngRoute',
		'ModulePattern',
		'MainCtrl',
		'appRoutes'
	]);
