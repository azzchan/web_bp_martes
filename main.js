const text = "Mi Página Web";
let index = 0;
const speed = 100; 
let typingInterval;
function typeEffect() {
    document.getElementById("typing-title").textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
        clearTimeout(typingInterval); 
    } else {
        typingInterval = setTimeout(typeEffect, speed);
    }
}
window.onload = function () {
    typeEffect();
};