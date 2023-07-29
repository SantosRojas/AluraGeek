import { loadFile, printProducts, getParameterByName,products,categories } from "./functions.js";
loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");

const productoCat = getParameterByName('cat');
var detalleProducto = products.find(function (objeto) {
    return objeto.category === productoCat;
});

console.log(productoCat)
const categoria = {}
categoria[detalleProducto.category] = categories[productoCat]
printProducts({ categorias: categoria ,show_vermas:false})

