const botonGenerar = document.getElementById("generate-btn");
const contenedor = document.getElementById("palette-grid");
const mensaje = document.getElementById("empty-state");

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarColor() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[numeroAleatorio(0, 15)];
  }

  return color;
}

function crearTarjeta(color) {
  return `
        <div class="chip" style="background-color:${color}">
            <p>${color}</p>
        </div>
    `;
}

function generarPaleta(cantidad) {
  contenedor.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const color = generarColor();

    contenedor.innerHTML += crearTarjeta(color);
  }

  mensaje.hidden = true;
}

botonGenerar.addEventListener("click", function () {
  const total = Number(cantidad.value);
  generarPaleta(total);
});

contenedor.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    alert("Color seleccionado: " + event.target.textContent);
  }
});
