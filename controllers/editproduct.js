import { detalleProduct, editProduct } from "../service/client-service.js"
const url = new URL(window.location)
const idedit = url.searchParams.get("id")

const formulario = document.querySelector("[data-form]")

detalleProduct(idedit)
    .then((product )=> {
        document.getElementById("nameproduct").value = product.name;
        document.getElementById("precio").value = product.price;
        document.getElementById("categoria").value = product.category;
        document.getElementById("urlimage").value = product.url;
        document.getElementById("description").value = product.description;
    })
    .catch((err) =>{
        alert("Upss, ocurrio un error al acceder al producto"+" "+ err)
    })


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    try {
        const nameProducto = document.getElementById("nameproduct").value
        const precioProducto = document.getElementById("precio").value
        const urlProducto = document.getElementById("urlimage").value
        const catgProducto = document.getElementById("categoria").value
        const descProducto = document.getElementById("description").value

        editProduct(idedit, nameProducto, catgProducto, precioProducto, urlProducto, descProducto)
            .then((response) => {
                window.location.href = "views/editexit.html"
            })
            .catch((err) => {
                alert(err)
            })
    } catch (error) {
        alert("Ocurrio un error"+" "+error)
    }

})