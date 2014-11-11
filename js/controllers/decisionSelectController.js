

vivirApp.controller('DecisionSelectController', function($scope,$location,$sce,currentStageObj,StateManagementService) {
	
	$scope.topValue = "";
	$scope.$watch('languageSelected', function() {
        StateManagementService.updateTopValue($scope.languageSelected);
    });
   $scope.languageSelected = StateManagementService.languageSelected;
   $scope.text = currentStageObj.desc;
   $scope.buttonDetails =currentStageObj.buttonDetails;
   $scope.linkEnabled = false;
   $scope.nextStage = currentStageObj.nextStage;
  
    if($scope.nextStage=="h2"){
    	$scope.buttonNextUrl="DisplayVideo";
    }
    
     $scope.audio_source = './components/audio/'+currentStageObj.audio_id+'.mp3';
    
   $scope.selectedIndex = -1;
    $scope.itemClicked = function ($index,lan_id) {
   
    if(lan_id=="1")
  	  { StateManagementService.languageSelected="es"; }
  	else
  	   { StateManagementService.languageSelected="en" ;}  
  		
    	 $scope.linkEnabled = true;
      
    $scope.selectedIndex = $index;
   
  }
  
       
});