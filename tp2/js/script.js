
$('document').ready(function(){
	$('#menu_burger').click(function() {
		if($('#header').is(':visible')) {
			$('#header').css("display","none");
		}else {
			$('#header').css("display","block");
			$('#header').css("float","center");
			$('#header').css("margin-left","0px");
			$('#header').css("margin-bottom","0px");
			$('#recherche').css("width","40px");
		}
	
	});
});