
 var vivirApp = angular.module('vivirApp',['ngRoute','ngSanitize']);
 
 vivirApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
 	   $locationProvider.html5Mode(true).hashPrefix('!');
 	
    $routeProvider.
      when('/Start', {
	templateUrl: 'partials/start.html',
	controller: 'DecisionSelectController',
	resolve: {
               currentStageObj: function () 
                {  return getStageInfo("h1"); }
          
             }
	
      }).
       when('/DisplayVideo', {
	   templateUrl: 'partials/video.html',
	   controller: 'VideoController',
	   resolve: {  
                  currentStageObj: function () 
                   { return getStageInfo("h2");}
          
                }
	    }).
    otherwise({
	redirectTo: '/Start'
      });
      
 
}]);

vivirApp.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);











