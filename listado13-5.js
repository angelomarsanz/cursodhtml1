function iniciar()
{
cajadatos=document.getElementById('cajadatos');
var boton=document.getElementById('boton');
boton.addEventListener('click', enviar, false);
} 
function enviar()
{
var datos=new FormData();
datos.append('nombre','Ángel');
datos.append('apellido','Omar');
var url="listado13-6.php";
var solicitud=new XMLHttpRequest();
solicitud.addEventListener('load', mostrar, false);
solicitud.open("POST", url, true);
solicitud.send(datos);
} 
function mostrar(e)
{
cajadatos.innerHTML=e.target.responseText;
} 
window.addEventListener('load', iniciar, false);