jQuery(document).ready(function(){
	$('#contact_form').validator().on('submit', function (e) {
	    if (e.isDefaultPrevented()) {
		    
	    } else {
		    message = $("#contactform").serialize();
			$.ajax({
				url: "//formspree.io/sunmy164@yahoo.com", 
				method: "POST",
				data: {message: message},
				dataType: "json",
			});
			$('#successModal').modal('show');
			$('#cancelBtn').click();
			return false;
	    }
	});
	//$("#sendMessageBtn").validator().on("click", function(event) {
		/*event.preventDefault();
			message = $("#contactform").serialize();
			$.ajax({
				url: "//formspree.io/sunmy164@yahoo.com", 
				method: "POST",
				data: {message: message},
				dataType: "json",
			});
			$('#successModal').modal('show');
			$('#cancelBtn').click();
			return false;*/	
	//});
	$("#cancelBtn").on("click", function() {
		//$('#contact_form').validator('destroy');
		$(".with-errors").html('');
		$(".has-error").removeClass("has-error");
	});
	$("#contact_form").submit(function(event){
		event.preventDefault();  
	});
});