
$('document').ready(function(){
	$('#menu_burger').click(function() {
		if($('#header').is(':visible')) {
			$('#header').css("display","none");
		}else {
			$('#header').css("display","block");
			$('#header').css("float","center");
			$('#header').css("margin-left","0px");
			$('#header').css("margin-bottom","0px");
			$('#recherche').css("width","35%");
		}

		// Détection du support
		if(typeof sessionStorage!='undefined') {
		  if('message' in sessionStorage) {
		    alert("Message récupéré");
		    document.getElementById('prenom').value = sessionStorage.getItem('prenom');
		    document.getElementById('nom').value = sessionStorage.getItem('nom');
		    document.getElementById('age').value = sessionStorage.getItem('age');
		    document.getElementById('ville_naissance').value = sessionStorage.getItem('ville_naissance');
		    document.getElementById('email').value = sessionStorage.getItem('email');
		    document.getElementById('photo').value = sessionStorage.getItem('photo');
		    document.getElementById('message').value = sessionStorage.getItem('message');
		  }
		} else {
		  alert("sessionStorage n'est pas supporté");
		}
			
	});
});