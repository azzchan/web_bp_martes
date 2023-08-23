const text = "Mi Página Web";
let index = 0;
const speed = 100; // Velocidad de escritura en milisegundos
let typingInterval;

function typeEffect() {
    document.getElementById("typing-title").textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        clearTimeout(typingInterval); // Detener el efecto al completar el texto
    } else {
        typingInterval = setTimeout(typeEffect, speed);
    }
}

// Iniciar el efecto de typing cuando se cargue la página
window.onload = function () {
    typeEffect();
};