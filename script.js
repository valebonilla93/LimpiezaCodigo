var boton = document.getElementById("btn");
var box = document.getElementById("caja");

function CambiarColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    caja.style.backgroundColor = color;
}

boton.addEventListener("click", CambiarColor);
