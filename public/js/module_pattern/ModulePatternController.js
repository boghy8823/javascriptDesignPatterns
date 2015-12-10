

(function(angular){
	angular
	.module('jsPatternsApp.modulePattern')
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
	.controller('ModulePatternController', ['$scope', '$sce', function( $scope, $sce ){
		console.log("This is the module pattern controller");
      
      var frame = document.getElementById('sandboxed');
      var code = document.getElementById('code').value;

console.log("frame", frame);
console.log("code",code);
    var iframeMarkup = 
        "<html>" +
          "<head>" +
            "<title>Evalboxs Frame</title>" +
            "<script>" +
              "console.log('Script');";
              "window.addEventListener('message', function (e) {" +
                  "return;" +

                "var mainWindow = e.source;" +
                "var result = '';" +
                "try {" +
                  "result = eval(e.data);" +
                  "console.log('result:',result);" +
                "} catch (e) {" +
                  "result = 'eval() threw an exception.';" +
                "}" +
                "mainWindow.postMessage(result, e.origin);" +
              "});" +
            "</script>" +
          "</head>" +
        "</html>"
 

       $scope.trustedMarkup =  iframeMarkup;
	}]);
})(window.angular);
