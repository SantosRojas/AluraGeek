// Functions

function loadFile(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

function createInput(id, type, placeholder) {
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

function createSubmitButton(value) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = value;
    button.className = "btn btn__blue";
    button.style.width = "100%"
    return button;
}

function createSelect(id,placeholder) {
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
 function createTextArea(id,placeholder,rows=5,cols=30){
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


function submitForm(event) {
    event.preventDefault();

    // Aquí puedes agregar la lógica para procesar los datos del formulario
    // Por ejemplo, podrías obtener los valores de los campos y enviarlos a través de una solicitud AJAX o realizar alguna acción específica.

    // Después de procesar los datos, puedes llamar a "event.preventDefault()" si deseas evitar que el formulario se envíe de forma tradicional.

    return false;
}

document.getElementById("myForm").addEventListener("submit", submitForm);
