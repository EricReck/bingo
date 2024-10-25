const palabrasDiv = document.getElementById('palabras');
const mensajeDiv = document.getElementById('mensaje');
let palabras = [];
let palabrasTachadas = 0;

function agregarPalabra() {
    const nuevaPalabra = document.getElementById('nuevaPalabra').value;
    if (nuevaPalabra) {
        palabras.push(nuevaPalabra);
        mostrarPalabras();
        document.getElementById('nuevaPalabra').value = '';
    }
}

function mostrarPalabras() {
    palabrasDiv.innerHTML = '';
    palabras.forEach(palabra => {
        const palabraDiv = document.createElement('div');
        palabraDiv.classList.add('palabra');
        palabraDiv.textContent = palabra;
        palabraDiv.addEventListener('click', () => tacharPalabra(palabraDiv));
        palabrasDiv.appendChild(palabraDiv);
    });
}

function tacharPalabra(palabraDiv) {
    palabraDiv.classList.add('tachada');
    palabrasTachadas++;
    if (palabrasTachadas === palabras.length) {
        mensajeDiv.textContent = '¡Bingo!';
        // Aquí puedes agregar efectos especiales, como un popup o una animación
    } else {
        mensajeDiv.textContent = `Te quedan ${palabras.length - palabrasTachadas} palabras`;
    }
}
