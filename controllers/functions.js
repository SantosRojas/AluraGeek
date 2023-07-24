// Functions
import { products } from "./db.js"

export function loadFile(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
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
    option2.value = "option1";
    option2.text = "Star Wars";

    var option3 = document.createElement("option");
    option3.value = "option2";
    option3.text = "Consolas";

    var option4 = document.createElement("option");
    option4.value = "option3";
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


export function submitForm(event) {
    event.preventDefault();

    // Aquí puedes agregar la lógica para procesar los datos del formulario
    // Por ejemplo, podrías obtener los valores de los campos y enviarlos a través de una solicitud AJAX o realizar alguna acción específica.

    // Después de procesar los datos, puedes llamar a "event.preventDefault()" si deseas evitar que el formulario se envíe de forma tradicional.

    return false;
}


export function createProduct(name, price, imageUrl) {
    const productoUnitario = document.createElement('div');
    productoUnitario.className = 'producto__unitario';

    const productoImage = document.createElement('div');
    productoImage.className = 'producto__image';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'producto imagen';
    productoImage.appendChild(img);

    const a = document.createElement('a');
    a.className = 'text--blue button';
    a.href = 'producto-detalle.html';
    a.textContent = 'Ver producto';
    productoImage.appendChild(a);

    productoUnitario.appendChild(productoImage);

    const p = document.createElement('p');
    p.textContent = name;
    productoUnitario.appendChild(p);

    const h4 = document.createElement('h4');
    h4.className = 'producto__precio';
    h4.textContent = price;
    productoUnitario.appendChild(h4);

    const a2 = document.createElement('a');
    a2.className = 'text--blue';
    a2.href = 'producto-detalle.html';
    a2.textContent = 'Ver producto';
    productoUnitario.appendChild(a2)

    return productoUnitario;
}


export function prodForCat(category, name, show_title = true) {
    const container = document.createElement('section');
    container.className = 'container container--vertical';

    if (show_title){
        const title = document.createElement('div');
    title.className = 'productos__title';

    const p = document.createElement('p');
    p.className = 'productos__text';
    p.textContent = name;
    title.appendChild(p);

    const a = document.createElement('a');
    a.className = 'productos__todo text--blue';
    a.href = 'all-products.html';
    a.textContent = 'Ver todo';

    const img = document.createElement('img');
    img.src = 'assets/images/flecha.svg';
    img.alt = 'ver todo';
    img.className = 'arrow';
    a.appendChild(img);

    title.appendChild(a);
    container.appendChild(title);
    }

    const categContainer = document.createElement('div');
    categContainer.id = category;
    categContainer.className = 'productos__container';

    container.appendChild(categContainer);

    return [container, categContainer];
}

const categories = {
    "sw": "Star Wars",
    "con": "Consolas",
    "divss": "Diversos"
}


export function printProducts({categorias = categories, show_title_category = true}) {
    const productos = document.getElementById("productos")

    for (const category in categorias) {
        const [prodTot, prodCont] = prodForCat(category, categorias[category],show_title_category)
        const prodFiltered = products.filter(product => product.category === category)
        prodFiltered.forEach(product => {
            const { name, price, url } = product
            prodCont.appendChild(createProduct(name, price, url))
        })

        productos.appendChild(prodTot)
    }
}