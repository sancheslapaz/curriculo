
window.addEventListener('load', function(){
	function blockKeyCTRL(evt){										//Bloqueio contra cópia da página HTML
		if ( evt.keyCode == 17 )
			return false;
		else
			return true;
	}
});