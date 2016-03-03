jQuery(document).ready(function(){
	$("#sendMessageBtn").on("click", function(event) {
		event.preventDefault();
		if($('#contact_form').valid()){
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
	$("#cancelBtn").on("click", function() {
		//$('#contact_form').validator('destroy');
		$(".with-errors").html('');
		$(".has-error").removeClass("has-error");
	});
	$("#myform").submit(function(event){
		event.preventDefault();  
	});
});