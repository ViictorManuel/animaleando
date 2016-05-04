//JavaScript
	
$(document).ready(function(e){
	$('#principal1'). height($('#page1').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('oso','audio/selva/oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/selva/tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jirafa','audio/selva/jirafa.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mono','audio/selva/mono.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/selva/leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hiena','audio/selva/hiena.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready