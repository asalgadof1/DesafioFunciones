// Función que cambia el color de fondo del elemento clickeado
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Selección del elemento
const ele = document.getElementById("ele1");

// Añadir evento de clic al elemento
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Cambiar a amarillo al hacer clic
});