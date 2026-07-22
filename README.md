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
- JavaScript puro, sin librerías externas, para practicar el manejo directo de la página (crear, modificar y borrar elementos a mano).
- Un solo "listener" de clics en el contenedor de las fichas, en vez de uno por cada ficha. Como las fichas se crean y se borran cada vez que tocás "Generar", conviene escuchar los clics desde el contenedor padre en lugar de repetir la misma lógica en cada ficha nueva.
- El color del ícono de copiado (blanco o negro) se calcula según qué tan claro u oscuro es el fondo, para que siempre se pueda leer bien sin importar el color que haya salido.
- El código está dividido en tres archivos (HTML, CSS y JS), cada uno con su función, en vez de tener todo junto en uno solo.
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
