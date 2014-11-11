
function getStageInfo(stageId) {
	//alert(stageId);
 var jasonObj = vivirdata;
 var stageObj={};	
	
	for (var i = 0; i < jasonObj.stage.length; i++) {
		 var stage = jasonObj.stage[i];
		 if(stage.id==stageId) 
		   {
		 	 stageObj.stage_id = stageId;
		 	 stageObj.nextStage = stage.next;
		 	 stageObj.desc=getTextAndVoiceInfo(stage.content,"text");
		 	 stageObj.audio_id=getTextAndVoiceInfo(stage.content,"audio");
             stageObj.buttonDetails=getStageImageDetails(stage.choices);
             
             stageObj.video_arr=stage.video;
             
             
		   }  
		    
		    
		  
		}
	return 	stageObj;
}


function getStageImageDetails(stageChoicesArr){
	
	//var array_for_render={ image_id: {}, lan: {},button:{id:{},text:{},type:{}} };
	var data =[];
	//var i=0; 
	for (var key in stageChoicesArr)
	 {
	 	each_key = stageChoicesArr[key].id;
	 	//lan = stageChoicesArr[key].text;
	 	//alert(each_key);
	 	if(each_key!="submit")
 	     {
 	      var image = new Object();
 	     	each_id = each_key.substr(each_key.indexOf(".") + 1);
 	       // array_for_render.image_id[i]= each_id;
 	       // array_for_render.lan[i]= stageChoicesArr[key].text;
 	        image.image_id = each_id;
 	        image.lan = stageChoicesArr[key].text;
 	        
 	        data.push(image);
 	      
 	     
 	     }
 	     // else
 	     // {
 	     	// array_for_render.button.id= stageChoicesArr[key].id;
 	     	// array_for_render.button.type= stageChoicesArr[key].type;
 	     	// array_for_render.button.text= stageChoicesArr[key].text;
 	     // }
 	         // alert(array_for_render.button.text);
	 	// i++;
	 }
	 // alert(data.image_id);console.log(data);
	//return array_for_render;
	return data;
}



function getStageImageIds(stageChoicesArr,controltype){
	
	var ids=[],each_key,each_id,i=0;
	
	for (var key in stageChoicesArr)
	 {
	   // if(stageChoicesArr[key]=="id" && )
	   if(controltype=="id")
	     {  
	     	if(stageChoicesArr[key].id!="submit")
	     	    {
	     	    	each_key = stageChoicesArr[key].id;
	     	    	//each_id = each_key.substr(each_key.indexOf(".") + 1);
	     	    	//ids{}=stageChoicesArr[key].id;
	     	    	//ids[] = stageChoicesArr[key].id;
	     	    	ids[i]=stageChoicesArr[key].id+"."+stageChoicesArr[key].text;i++;
	     	    	//alert(each_id);
	     	    }
	     }
	 }
	 
	//alert(ids);
	return ids;
}


function getTextAndVoiceInfo(stageContentArray,type) {
	
	var data;	
		
	for (var key in stageContentArray)
	 {
	   		
		if(type=="text")
		 { data =stageContentArray[key].text;}
		else if (type=="audio")
		 { data =stageContentArray[key].audio;}
		
	 }
	
	return data;
	
}