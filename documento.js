//1
function contarElementos()
{

var parrafos=document.getElementsByTagName("p");
var divs=document.getElementsByTagName("div");

cantidadParrafos=parrafos.length;
cantidadDivs=divs.length;

recuento.innerHTML="Tenemos un total de "+cantidadParrafos+" parrafos y un total de "+cantidadDivs+" divs ";

}


function borrar() {
	var y = document.getElementsByTagName('input');
	for ( i = 0; i<y.length; i++) {
		y[i].value = "";
	}
}