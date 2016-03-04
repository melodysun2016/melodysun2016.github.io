$(window).load(function () {
	$('#loading').delay(500).fadeOut('slow');
    $('#loading-holder').delay(500).fadeOut('slow');
});
jQuery(document).ready(function(){
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    })
	$("#backtotopbtn").backToTop();
	$('#contact_form').validator().on('submit', function (e) {
	    if (e.isDefaultPrevented()) {
		    
	    } else {
		    message = $("#contact_form").serialize();
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
	$("#contact_form").submit(function(event){
		event.preventDefault();  
	});
});