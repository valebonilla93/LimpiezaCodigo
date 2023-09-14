const btn = document.getElementById("btn");
const box = document.getElementById("box");


// Función que sirve para cambiar el color del rectángulo en pantalla.
function SwitchColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    box.style.backgroundColor = color;
}

//Controlador de eventos que indica que al hacer click en el botón se ejecutará la función SwitchColor
btn.addEventListener("click", SwitchColor);
