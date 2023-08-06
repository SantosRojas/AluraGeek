// Functions
import { listarProducts,removeProduct } from "../service/client-service.js";

export const products = await listarProducts("http://localhost:3000/productos")

export function loadFile(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
}

export function createInput(id, type, placeholder) {
    const divContainer = document.createElement("div");
    divContainer.className = "input-container";

    const input = document.createElement("input");
    input.name = id;
    input.id = id;
    input.className = "input";
    input.type = type;
    input.placeholder = placeholder;
    input.required = true;

    const label = document.createElement("label");
    label.className = "input-label";
    label.htmlFor = id;
    label.textContent = placeholder;

    const errorMessage = document.createElement("span");
    errorMessage.className = "input-message-error";
    errorMessage.style.color = "red"
    errorMessage.textContent = "Este campo no es válido";

    divContainer.appendChild(input);
    divContainer.appendChild(label);
    divContainer.appendChild(errorMessage);

    return divContainer;
}

export function createSubmitButton(value) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = value;
    button.className = "btn btn__blue";
    button.style.width = "100%"
    return button;
}

export function createSelect(id, placeholder) {
    var selectContainer = document.createElement("div");
    selectContainer.classList.add("input-container");

    var select = document.createElement("select");
    select.classList.add("select");
    select.id = id;
    select.required = true;

    var option1 = document.createElement("option");
    option1.value = "";
    option1.disabled = true;
    option1.selected = true;

    var option2 = document.createElement("option");
    option2.value = "sw";
    option2.text = "Star Wars";

    var option3 = document.createElement("option");
    option3.value = "con";
    option3.text = "Consolas";

    var option4 = document.createElement("option");
    option4.value = "divss";
    option4.text = "Diversos";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    var label = document.createElement("label");
    label.classList.add("select-label");
    label.htmlFor = id;
    label.textContent = placeholder;

    selectContainer.appendChild(select);
    selectContainer.appendChild(label);

    return selectContainer;
}

export function createTextArea(id, placeholder, rows = 5, cols = 30) {
    var textareaContainer = document.createElement("div");
    textareaContainer.classList.add("textarea-container");

    var textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    textarea.name = "message";
    textarea.id = id;
    textarea.cols = cols;
    textarea.rows = rows;
    textarea.placeholder = placeholder;
    textarea.required = true;

    var label = document.createElement("label");
    label.classList.add("textarea-label");
    label.htmlFor = id;
    label.textContent = placeholder;

    textareaContainer.appendChild(textarea);
    textareaContainer.appendChild(label);
    return textareaContainer;
}


export function createProduct(id, name, price, imageUrl) {
    const productoUnitario = document.createElement('div');
    productoUnitario.className = 'producto__unitario';

    const productoImage = document.createElement('div');
    productoImage.className = 'producto__image';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.borderRadius = ".3rem";
    img.alt = 'producto imagen';
    img.className = "imagep";
    productoImage.appendChild(img);

    //Crear un contenedor para los iconos
    const iconContainer = document.createElement('div');
    iconContainer.className = "icon__container"
    iconContainer.style.background = "#0056b3"
    iconContainer.style.borderRadius = ".2rem"
    iconContainer.style.marginTop = ".2rem"

    //Crear el icono de eliminar
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt delete-icon';
    deleteIcon.style.color = "white"
    deleteIcon.style.marginRight = ".5rem"
    deleteIcon.dataset.id = id
    deleteIcon.addEventListener('click', confirmarEliminarProducto);
    deleteIcon.addEventListener('mouseover', function () {
        this.style.cursor = "pointer";
    })
    iconContainer.appendChild(deleteIcon);

    //Crear el icono de editar
    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit edit-icon'; 
    editIcon.style.color = "white"
    editIcon.dataset.id = id
    editIcon.addEventListener('click', editarProducto);
    editIcon.addEventListener('mouseover', function () {
        this.style.cursor = "pointer";
    })
    iconContainer.appendChild(editIcon);

    // Estilos para posicionar los iconos y aumentar el espacio entre ellos
    iconContainer.style.position = 'absolute';
    iconContainer.style.top = '0';
    iconContainer.style.right = '0';
    iconContainer.style.padding = '5px';
    iconContainer.style.marginRight = '10px'; // Aumentar el espacio entre los iconos

    productoImage.appendChild(iconContainer);

    const a = document.createElement('a');
    a.className = 'text--blue button';
    a.textContent = 'Ver producto';
    a.addEventListener('click', redirigirADetalles);
    a.addEventListener('mouseover', function () {
        this.style.cursor = "pointer";
    })
    a.dataset.pid = id;
    productoImage.appendChild(a);

    productoUnitario.appendChild(productoImage);

    const p = document.createElement('p');
    p.textContent = name;
    productoUnitario.appendChild(p);

    const h4 = document.createElement('h4');
    h4.className = 'producto__precio';
    h4.textContent = "$ " + price;
    productoUnitario.appendChild(h4);

    return productoUnitario;

}


export function prodForCat(category, name, show_title = true, show_vermas = true) {
    const container = document.createElement('section');
    container.className = 'container container--vertical';

    if (show_title) {
        const title = document.createElement('div');
        title.className = 'productos__title';

        const p = document.createElement('p');
        p.className = 'productos__text';
        p.textContent = name;
        title.appendChild(p);

        if (show_vermas) {
            const a = document.createElement('a');
            a.className = 'productos__todo text--blue';
            a.dataset.todo = category
            a.addEventListener('click', redirigirATodo);
            a.addEventListener('mouseover', function () {
                this.style.cursor = "pointer"
            })
            a.textContent = 'Ver todo';

            const img = document.createElement('img');
            img.src = 'assets/images/flecha.svg';
            img.alt = 'ver todo';
            img.className = 'arrow';
            a.appendChild(img);

            title.appendChild(a);
        }
        container.appendChild(title);
    }

    const categContainer = document.createElement('div');
    categContainer.id = category;
    categContainer.className = 'productos__container';

    container.appendChild(categContainer);

    return [container, categContainer];
}

export const categories = {
    "sw": "Star Wars",
    "con": "Consolas",
    "divss": "Diversos"
}


export function printProducts({ categorias = categories, show_title_category = true, show_vermas = true }) {
    const productos = document.getElementById("productos")

    for (const category in categorias) {
        const [prodTot, prodCont] = prodForCat(category, categorias[category], show_title_category, show_vermas)
        const prodFiltered = products.filter(product => product.category === category)
        prodFiltered.forEach(product => {
            const { id, name, price, url } = product
            prodCont.appendChild(createProduct(id, name, price, url))
        })

        productos.appendChild(prodTot)
    }
}

export function redirigirADetalles(event) {
    // Obtén el ID del producto desde el atributo "data-producto-id" del botón
    const productoID = event.currentTarget.getAttribute('data-pid');
    // Construye la URL de la página de detalles del producto con el ID
    const urlDetallesProducto = `producto-detalle.html?id=${productoID}`;
    // Redirige a la página de detalles del producto
    window.location.href = urlDetallesProducto;
}


export function redirigirATodo(event) {
    // Obtén el ID del producto desde el atributo "data-producto-id" del botón
    const productoCategory = event.currentTarget.getAttribute('data-todo');
    // Construye la URL de la página de detalles del producto con el ID
    const urlDetallesProducto = `all-products-category.html?cat=${productoCategory}`;
    // Redirige a la página de detalles del producto
    window.location.href = urlDetallesProducto;
}

// Función para obtener el parámetro "id" de la URL
export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function confirmarEliminarProducto(event) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este producto?');

    const iconoPulsado = event.target;
    const idProducto = iconoPulsado.dataset.id;

    if (confirmacion) {
        removeProduct(idProducto).then( response => {
            alert("Producto eliminado")
        }).catch(err => console.log(err))
    }
}

function editarProducto(event){
    const iconoPulsado = event.target;
    const idProducto = iconoPulsado.dataset.id;
    window.location.href = `edit-products.html?id=${idProducto}`
}