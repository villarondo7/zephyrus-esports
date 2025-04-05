function mostrarCarrusel(nombre, imagenes, descripcion) {
  const carrusel = document.getElementById("carrusel");
  const contenedorImagenes = document.getElementById("imagenes");
  const titulo = document.getElementById("titulo");
  const descripcionTexto = document.getElementById("descripcion");

  // Set the title and description
  titulo.textContent = nombre;
  descripcionTexto.textContent = descripcion;

  // Clear previous images
  contenedorImagenes.innerHTML = "";

  // Add new images to the carousel
  imagenes.forEach((imagen) => {
      const img = document.createElement("img");
      img.src = imagen;
      img.alt = nombre;
      contenedorImagenes.appendChild(img);
  });

  // Show the carousel
  carrusel.classList.remove("oculto");
}

function cerrarCarrusel() {
  const carrusel = document.getElementById("carrusel");
  carrusel.classList.add("oculto");
}

function moverCarrusel(direccion) {
  let imagenes = document.getElementById("imagenes");
  let desplazamiento = imagenes.clientWidth / 2;
  imagenes.scrollBy({ left: direccion * desplazamiento, behavior: "smooth" });
}

function mostrarSeccion(seccion) {
  document
    .querySelectorAll(".seccion")
    .forEach((sec) => sec.classList.add("oculto"));
  document.getElementById(seccion).classList.remove("oculto");
}

const sections = document.querySelectorAll('.seccion');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

const toggleTheme = document.querySelector('#toggle-theme');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});