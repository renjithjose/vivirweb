

vivirApp.directive('goButtonLink', function ($sce) {
  return {
	      scope: {
	        enabled: '=goButtonLink'
	      },
	      link: function(scope, element, attrs) {
	        element.bind('click', function(event) {
	          if(!scope.enabled) {
	            event.preventDefault();
	          }
	        });
	        
	      }
      };
});