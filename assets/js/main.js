window.onload = function(){
	alert("página cargada");
}

var accion = document.getElementById("demo");
accion.addEventListener("click", function(){
	alert("¡HOLA MUDO!");
});

var entrada = document.getElementById("ingresa");
entrada.addEventListener("mouseover", function(){
	alert("Estás Sobre mi");
});

var salida = document.getElementById("ingresa");
salida.addEventListener("mouseout", function(){
	alert("No estás sobre mi");
})
