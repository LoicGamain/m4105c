$('document').ready(function(){
	$('#menu_burger').click(function() {
		if($('#menu').is(':visible')) {
			$('#menu').css("display","none");
		}else {
			$('#menu').css("display","block");
			$('#menu').css("float","center");
			$('#menu').css("margin-left","0px");
			$('#menu').css("margin-bottom","0px");
		}
	}
});