vivirApp.controller('VideoController', function($scope,$location,currentStageObj,StateManagementService) {
	
	if(StateManagementService.languageSelected!=""){
	
	$scope.stage_id = currentStageObj.stage_id;
	$scope.$on('valuesUpdated', function() {
    $scope.languageSelected = StateManagementService.languageSelected;
      
    });
    
     $scope.languageSelected = StateManagementService.languageSelected;
     $scope.video_arr=currentStageObj.video_arr;
  
    
      $scope.getVideoUrl = function (video_arr,lan_sel) {
      	var video_source;

       	for (var key in video_arr)
	    {
	    	each_key = video_arr[key].lang;

		 	if(each_key==lan_sel)
	 	     {
	 	        video_source = '//www.youtube.com/embed/'+video_arr[key].url+"?autoplay=1&rel=0";
	         }
       } 	
       
       
       return video_source;
  };
  
 }
 else
 {	
 	 $location.path('/Start');
 }   
});