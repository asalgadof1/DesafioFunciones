
 // Cambiar el color de los divs al hacer clic
 function cambiarColorAlNegro(event) {
    event.target.style.backgroundColor = 'black';
}

// Asignar evento a los divs
document.getElementById('azul').addEventListener('click', cambiarColorAlNegro);
document.getElementById('rojo').addEventListener('click', cambiarColorAlNegro);
document.getElementById('verde').addEventListener('click', cambiarColorAlNegro);
document.getElementById('amarillo').addEventListener('click', cambiarColorAlNegro);


let colorActual;

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    if (event.key === 'a') {
        colorActual = 'pink';
        keyDiv.style.backgroundColor = colorActual;
    } else if (event.key === 's') {
        colorActual = 'orange';
        keyDiv.style.backgroundColor = colorActual;
    } else if (event.key === 'd') {
        colorActual = 'lightblue';
        keyDiv.style.backgroundColor = colorActual;
    } else if (event.key === 'q') {
        colorActual = 'purple';
        crearNuevoDiv(colorActual);
    } else if (event.key === 'w') {
        colorActual = 'gray';
        crearNuevoDiv(colorActual);
    } else if (event.key === 'e') {
        colorActual = 'brown';
        crearNuevoDiv(colorActual);
    }
});
function crearNuevoDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}

