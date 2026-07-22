# Generador de Paletas de Colores — PI Módulo 1 Henry

## Descripción
Aplicación web que genera paletas de colores aleatorias. El usuario elige la cantidad de colores y el formato de código, genera una nueva paleta con un botón, y puede copiar cualquier color al portapapeles con un click.
---
## Demo
 Ver demo en GitHub Pages(https://valefresia.github.io/ProyectoM1_valentinaFresia-/)
---
## Funcionalidades
- Generación de paletas de colores aleatorios
- Selección de cantidad de colores 6, 8 o 9 
- Elección de formato de código: HEX o RGBA además siempre se muestra el valor en HSL
- Copiado del código de color al portapapeles con un click sobre la ficha
- Notificación tipo al copiar un color
- Contraste automático: el color del ícono sobre cada ficha se adapta según el brillo del fondo, para mantener legibilidad
- Diseño responsive para desktop y móvil
- HTML semántico y consideraciones básicas de accesibilidad
--
## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
---
## Estructura del proyecto
```
ProyectoM1_valentinaFresia-
│── index.html
│── style.css
│── script.js
│── README.md
---
## Cómo utilizar el proyecto

**Local:**
1. Clonar el repositorio:
```bash
git clone https://github.com/valefresia/ProyectoM1_valentinaFresia-.git
```
2. Abrir la carpeta del proyecto.
3. Ejecutar `index.html` en el navegador.

**Producción:**
La app está desplegada en GitHub Pages (ver link en la sección Demo). El despliegue se hace directamente desde la rama principal del repositorio, sin build ni proceso de compilación, ya que es HTML/CSS/JS puro.
---
## Decisiones técnicas
- JavaScript nativo, sin librerías, para reforzar el manejo directo del DOM.
- Delegación de eventos en el contenedor de las fichas (un solo listener) en lugar de un listener por ficha, porque el contenido se genera y destruye dinámicamente en cada click de "Generar".
- Cálculo de contraste de texto con una fórmula de brillo perceptual, para que el ícono de copiado sea siempre legible sin importar el color de fondo.
- Separación en tres archivos (HTML, CSS, JS) según responsabilidad, en vez de todo mezclado.
---
## Objetivo
Este proyecto fue desarrollado como challenge final para poner en práctica conocimientos fundamentales de desarrollo web, incluyendo:
- HTML semántico.
- CSS responsive.
- Manipulación del DOM con JavaScript.
- Eventos.
- Funciones.
- Generación de datos aleatorios.
- Buenas prácticas de organización del código.

## Uso de la IA
Documento publico para leer con capturas 
https://docs.google.com/document/d/1zXVIoCIWPUnK46Br_382n0FYYuKDyjJMavjz27oTagM/edit?usp=sharing

---
## Autor
Valentina Fresia
