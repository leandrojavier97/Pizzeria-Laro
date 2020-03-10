var x = new Date();
var dia = x.getDay();
var nombredia;
var descripciondia;
var preciodia;


switch(dia){
    case 0:
        document.getElementById('promo-dom').style.display="none";
        nombredia = "DOMINGO";
        descripciondia = "3 Muzza<br>2 Brahamas";
        preciodia = "$350";
        break;
    case 1:
        document.getElementById('promo-lun').style.display="none";
        nombredia = "LUNES";
        descripciondia = "1 Muzza<br>1 Coca-Cola 1.5L";
        preciodia = "$115";
        break;
    case 2:
        document.getElementById('promo-mar').style.display="none";
        nombredia = "MARTES";
        descripciondia = "6 empanadas (a elección)<br>1 Fanta 1.5";
        preciodia = "$180";
        break;
    case 3:
        document.getElementById('promo-mie').style.display="none";
        nombredia = "MIERCOLES";
        descripciondia = "1 Jamon<br>1 Muzza<br>1 Coca-Cola 2.25L";
        preciodia = "$220";
        break;
    case 4:
        document.getElementById('promo-jue').style.display="none";
        nombredia = "JUEVES";
        descripciondia = "1 Muzza<br>1 doc de empanadas(a elección)<br>Sprite 2.25L";
        preciodia = "$300";
        break;
    case 5:
        document.getElementById('promo-vie').style.display="none";
        nombredia = "VIERNES";
        descripciondia = "1 con Anchoas<br>1 Brahama 1L";
        preciodia = "$150";
        break;
    case 6:
        document.getElementById('promo-sab').style.display="none";
        nombredia = "SABADO";
        descripciondia = "3 de JyQ<br>Coca-Cola 1.5L";
        preciodia = "$110";
        break;        
}
    
var nombre = document.getElementById("nombre-dia");
nombre.innerHTML = nombredia;

var descripcion = document.getElementById("descripcion-dia");
descripcion.innerHTML = descripciondia;

var precio = document.getElementById("precio-dia");
precio.innerHTML = preciodia;  
