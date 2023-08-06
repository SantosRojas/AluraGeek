import { addProduct } from "../service/client-service.js"

const formulario = document.querySelector("[data-form]")
formulario.addEventListener("submit",(evento) => {
    evento.preventDefault()
    const nameProducto = document.getElementById("name__product").value
    const precioProducto = document.getElementById("precio").value
    const urlProducto= document.getElementById("urlimage").value
    const catgProducto = document.getElementById("categoria").value
    const descProducto = document.getElementById("description").value

    addProduct(nameProducto,catgProducto,precioProducto,urlProducto,descProducto)
    .then((response) => {
        window.location.href = "views/regexit.html"
    })
    .catch((err) => {
        alert(err)
    })

})