import { loadFile, getParameterByName, printProducts, products} from "./functions.js";

loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");


// Obtén el ID del producto de la URL
const productoID = getParameterByName('id');
var detalleProducto = products.find(function (objeto) {
    return objeto.id === productoID;
});

// Muestra los detalles del producto en la página
if (detalleProducto) {
    
    const detalleProductoHTML = `
    <img
    class="product__detalle__imagen"
    src=${detalleProducto.url}
    alt="imagen detalle"
  />

  <div class="product__detalle">
    <p class="product__detalle__title">${detalleProducto.name}</p>
    <h4 class="producto__precio">${detalleProducto.price}</h4>
    <p class="product__detalle_texto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
    `;
    document.getElementById('detalleProducto').innerHTML = detalleProductoHTML;
    
    const categoria = {}
    categoria[detalleProducto.category]="Productos Similares"
    printProducts({categorias:categoria})
} else {
    // Si no se encuentra el producto, muestra un mensaje de error o redirige a una página de error.
    document.getElementById('detalleProducto').innerText = 'Producto no encontrado.';
}