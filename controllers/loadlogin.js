import { loadFile, createInput, createSubmitButton } from "./functions.js";

loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");

const formContainer = document.getElementById("form-login");
const loginSubmit = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        // Mostrar el mensaje de error y detener el envío del formulario
        var messageErrors = document.querySelectorAll(".input-message-error");
        messageErrors.forEach(element => {
            element.style.display = "block"
        })

    } else {

        if (email === "rojas@alura.com" && password === "alurageek"){
            window.location.href = "all-products.html";
        }

        else{
            alert("datos incorrectos")
        }
        
    }
}
formContainer.appendChild(createInput("email", "email", "Email"))
formContainer.appendChild(createInput("password", "password", "Password"))
const button_login = createSubmitButton("Entrar")
button_login.onclick = loginSubmit
button_login.classList.add("entrar")
formContainer.appendChild(button_login)
