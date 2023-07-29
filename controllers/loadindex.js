
import { loadFile,printProducts,redirigirADetalles } from "./functions.js";

loadFile("header", "views/header.html");
loadFile("banner", "views/banner.html");
loadFile("footer", "views/footer.html");

printProducts({})

// Obtén todos los botones y agrega un evento click a cada uno
const botonesDetalles = document.querySelectorAll('.text--blue, .button');
botonesDetalles.forEach((boton) => {
  boton.addEventListener('click', redirigirADetalles);
  boton.addEventListener('mouseover',function(){
    this.style.cursor = "pointer"
  })
});

