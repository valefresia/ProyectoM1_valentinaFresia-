const botonGenerar = document.getElementById("generate-btn");
const selectCantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("palette-grid");
const mensaje = document.getElementById("empty-state");
const toast = document.getElementById("toast");
const radiosFormato = document.querySelectorAll('input[name="formato"]');

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera un color en formato HEX, ej: "#3F7A9D"
function generarHex() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[numeroAleatorio(0, 15)];
  }

  return color;
}

// Convierte un HEX a su equivalente en HSL
function hexToHSL(hex) {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const diferencia = max - min;
    s = l > 0.5 ? diferencia / (2 - max - min) : diferencia / (max + min);

    if (max === r) {
      h = (g - b) / diferencia + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / diferencia + 2;
    } else {
      h = (r - g) / diferencia + 4;
    }

    h = h / 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  const lPorcentaje = Math.round(l * 100);

  return "hsl(" + h + ", " + s + "%, " + lPorcentaje + "%)";
}

// Convierte un HEX a su equivalente en RGBA, ej: "rgba(63, 122, 157, 1)"
function hexToRgba(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", 1)";
}

// Decide si el texto sobre la ficha debe ser oscuro o claro
function colorDeTexto(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const brillo = (r * 299 + g * 587 + b * 114) / 1000;

  return brillo > 128 ? "#14201A" : "#EEF1EC";
}

// Devuelve el código a mostrar como segundo dato de la ficha,
// según el formato elegido (HEX o RGBA). Se usa tanto al crear
// una ficha nueva como al actualizar una que ya existe.
function obtenerCodigoSecundario(hex, formato) {
  return formato === "rgba" ? hexToRgba(hex) : hex;
}

function obtenerFormatoSeleccionado() {
  return document.querySelector('input[name="formato"]:checked').value;
}

function crearTarjeta(hex, formato) {
  const hsl = hexToHSL(hex);
  const colorTexto = colorDeTexto(hex);
  const segundoCodigo = obtenerCodigoSecundario(hex, formato);

  return `
    <li class="chip">
      <button
        type="button"
        class="chip__swatch"
        style="--swatch-color:${hex}; --icon-color:${colorTexto};"
        data-hex="${hex}"
      >
        <span class="chip__copy-icon" aria-hidden="true">⧉</span>
      </button>
      <hr class="chip__perforation" />
      <div class="chip__label">
        <span class="chip__hex">${hsl}</span>
        <span class="chip__hsl" data-codigo-secundario>${segundoCodigo}</span>
      </div>
    </li>
  `;
}

function generarPaleta(cantidad) {
  const formatoSeleccionado = obtenerFormatoSeleccionado();
  const tarjetas = [];

  for (let i = 0; i < cantidad; i++) {
    const hex = generarHex();
    tarjetas.push(crearTarjeta(hex, formatoSeleccionado));
  }

  contenedor.innerHTML = tarjetas.join("");
  mensaje.hidden = true;
  contenedor.hidden = false;
}

// Recorre las fichas ya generadas y actualiza solo el código secundario
// (HEX o RGBA) según el formato recién elegido. No toca los colores:
// por eso el usuario puede cambiar de formato sin perder la paleta actual.
function actualizarFormatoDeFichas() {
  if (contenedor.hidden) {
    return; // todavía no se generó ninguna paleta, no hay nada que actualizar
  }

  const formatoActual = obtenerFormatoSeleccionado();
  const fichas = contenedor.querySelectorAll(".chip__swatch");

  fichas.forEach(function (boton) {
    const hex = boton.dataset.hex;
    const nuevoCodigo = obtenerCodigoSecundario(hex, formatoActual);
    const spanCodigo = boton
      .closest(".chip")
      .querySelector("[data-codigo-secundario]");

    spanCodigo.textContent = nuevoCodigo;
  });
}

function mostrarToast(texto) {
  toast.textContent = texto;
  toast.classList.add("is-visible");

  setTimeout(function () {
    toast.classList.remove("is-visible");
  }, 2000);
}

botonGenerar.addEventListener("click", function () {
  const total = Number(selectCantidad.value);
  generarPaleta(total);
});

radiosFormato.forEach(function (radio) {
  radio.addEventListener("change", actualizarFormatoDeFichas);
});

contenedor.addEventListener("click", function (event) {
  const boton = event.target.closest(".chip__swatch");

  if (!boton) {
    return;
  }

  const hex = boton.dataset.hex;

  navigator.clipboard.writeText(hex).then(function () {
    mostrarToast("Copiado " + hex);
  });
});