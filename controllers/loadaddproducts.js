import {loadFile,createInput,createSelect,createSubmitButton,createTextArea, submitForm} from "./functions.js"

loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");
// Accedemos al formulario
const myForm = document.getElementById("myForm");

//agregamos las entradas de informacion
myForm.appendChild(createInput("name__product", "text", "Nombre del producto"));
myForm.appendChild(createInput("precio", "number", "Precio del producto"));
myForm.appendChild(createSelect("categoria", "Seleccione una categoria"))
myForm.appendChild(createTextArea("description", "Descripcion del producto"))
// Agregamos el botón de submit dinámicamente al final del formulario
myForm.appendChild(createSubmitButton("Agregar Producto"));
myForm.addEventListener("submit", submitForm);