window.onload = function(){
	alert("página cargada");
}

var accion = document.getElementById("demo");
accion.addEventListener("click", function(){
	alert("HOLA");
});

var entrada = document.getElementById("ingresa");
entrada.addEventListener("mouseover", function(){
	alert("Estoy sobre");
})
