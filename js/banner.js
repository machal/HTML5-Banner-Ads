$(document).ready(function() {
	
	// Po nacteni dokumentu pridame tridu co startuje animaci
	$('body').addClass('simple-animation-start');
	
	window.setInterval(function(){ 
		$('body').toggleClass('simple-animation-start simple-animation-end');
	}, 2000);		
	
});
