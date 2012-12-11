$(document).ready(function() {
	
	$('body').addClass('animation-start');
	
	window.setTimeout(function(){ 
		$('body').removeClass('animation-start').addClass('animation-end');
	}, 5000);		
	
});
