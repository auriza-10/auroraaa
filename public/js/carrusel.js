const imagenes = [
  "/img/aurora1.jpg",
  "/img/aurora2.jpg",
  "/img/aurora3.jpg",
  "/img/aurora4.jpg"
];

let indice = 0;
const track = document.getElementById("carousel-track");
let isTransitioning = false;

function renderCarrusel() {
  if (isTransitioning) return;
  isTransitioning = true;
  
  // Crear una copia del array para el efecto infinito
  const imagenesExtendidas = [...imagenes, imagenes[0]];
  
  track.innerHTML = "";
  
  imagenesExtendidas.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("coverflow-item");
    
    if (i === indice) {
      img.classList.add("active");
    }
    
    track.appendChild(img);
  });

  // Si llegamos al final, reiniciamos suavemente
  if (indice === imagenes.length) {
    setTimeout(() => {
      isTransitioning = true;
      indice = 0;
      track.style.transition = 'none';
      renderCarrusel();
      setTimeout(() => {
        track.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        isTransitioning = false;
      }, 50);
    }, 1200);
  } else {
    setTimeout(() => {
      isTransitioning = false;
    }, 1200);
  }
}

function next() {
  if (isTransitioning) return;
  indice = (indice + 1) % (imagenes.length + 1);
  renderCarrusel();
}

function prev() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  renderCarrusel();
}

// Autoavance infinito
let intervalo = null;
function startAuto() {
  if (intervalo) clearInterval(intervalo);
  intervalo = setInterval(next, 4000);
}

// Asegurarse de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  if (track) {
    renderCarrusel();
    startAuto();
    
    // Pausa al pasar el mouse
    track.parentElement.addEventListener("mouseenter", () => clearInterval(intervalo));
    track.parentElement.addEventListener("mouseleave", startAuto);
  }
}); 