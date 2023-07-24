import { printProducts,loadFile } from "./functions.js"
loadFile("header", "views/header.html");
loadFile("footer", "views/footer.html");
printProducts({show_title_category:false})