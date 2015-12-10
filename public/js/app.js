(function(angular){

	angular.module('appRoutes', []);

	angular.module('jsPatternsApp.mainCtrl', []);
	
	angular.module('jsPatternsApp.modulePattern', []);

	angular.module('jsPatternsApp',[
			'ngRoute',
			'appRoutes',
			'jsPatternsApp.mainCtrl',
			'jsPatternsApp.modulePattern'
	]);

})(window.angular);
