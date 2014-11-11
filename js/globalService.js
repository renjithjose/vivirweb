vivirApp.factory('StateManagementService', function($rootScope){
    var service = {};
    service.languageSelected = "";
   
    service.updateLanguageSelected = function(value){//alert(value);
        this.languageSelected = value;
        $rootScope.$broadcast("valuesUpdated");
    }
  
    return service;
});

//var demo = angular.module('demo', ['demoService']);