import { loadFile,createInput,createSubmitButton } from "./functions.js";

loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");

const formContainer = document.getElementById("form-login");

formContainer.appendChild(createInput("email", "email", "Email"))
formContainer.appendChild(createInput("password", "password", "Password"))
const button_login = createSubmitButton("Entrar")
button_login.classList.add("entrar")
formContainer.appendChild(button_login)