
import { loadFile,printProducts } from "./functions.js";

loadFile("header", "views/header.html");
loadFile("banner", "views/banner.html");
loadFile("footer", "views/footer.html");

printProducts({})