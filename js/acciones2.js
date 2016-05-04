//JavaScript
	
$(document).ready(function(e){
	$('#principal2'). height($('#page2').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('gallina','audio/granja/gallina.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','audio/granja/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/granja/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('burro','audio/granja/burro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('toro','audio/granja/toro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pato','audio/granja/pato.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready