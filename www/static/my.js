var apipath="http://127.0.0.1:8000/smart_view/smart_view_sync/";

$(document).ready(function(){
	if(localStorage.user_id==undefined){
		url = "#loginPage";
	}else{
		url = "#homePage";
		$.mobile.navigate(url);
	}
		
});


function menuClick(){
		$(".errorChk").text("");
		$(".sucChk").text("");
		
		$('#myInput').val('');
		
		url = "#homePage";
		$.mobile.navigate(url);
	
	}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	}



function syncBasic() {
					
		var cid=$("#cid").val() ;
	 	var user_id=$("#user_id").val() ;
	 	var user_pass=$("#user_pass").val() ;
		if (cid=="" || user_id=="" || user_pass==""){
			 $(".errorChk").html("Required cid user id and password");	
		 }else{	
			 //$('#syncBasic').hide();			 
			 $(".errorChk").html("Sync in progress. Please wait...");
			
			if(localStorage.sync_code==undefined || localStorage.sync_code==""){
					localStorage.sync_code=0
				}
			
		 	//alert(apipath+'passwordCheck?cid='+cid+'&user_id='+user_id+'&user_pass='+encodeURI(user_pass)+'&sync_code='+localStorage.sync_code);
			
			$.ajax({
				url:apipath+'passwordCheck?cid='+cid+'&user_id='+user_id+'&user_pass='+encodeURI(user_pass)+'&sync_code='+localStorage.sync_code,
			  	success: function(result) {
					if (result=='YES'){						
						localStorage.user_id=user_id;
						
						$(".errorChk").html("Sync Successful");						
						
						var url = "#homePage";
						$.mobile.navigate(url);
					}
					else {
						
						$(".errorChk").html("Sync Failed. Authorization or Network Error.");
						$('#syncBasic').show();
					}
				
				}
			});//------/ajax 
		 
		 }//-----/field
			
	}





var ul = document.getElementById('myUL');
var optionVal = new Array();

ul.onclick = function(event){
	var target = event.target.innerHTML;
		
	var medList='';
	medList+='<p style="font-size:20px;">'+target+'<p>';
	medList+='';
	
	$("#selectedMedicine").empty();
	$('#selectedMedicine').append(medList).trigger('create');	
	
	url = "#first_page";
	$.mobile.navigate(url);
};


function searchData(){
	var myInput=$("#myInput").val();
	if(myInput==""){
		
	}else{
		
	url = "#first_page";
	$.mobile.navigate(url);
	}
}


function cameraError(message){
    alert("Canceled!"); 
	
}
/*camera area end*/

var options = {
		  valueNames: [ 'name', 'born', 'location' ]
		};

var userList = new List('users', options);



