import { getContent } from "./dinamiContent.js";
import { asignMenuEvent, asignNavEvent } from "./mobileMenu.js";


(function(){
    const app = document.getElementById("app");
    let div = document.createElement("div");
    div.innerHTML+= getContent();
    app.appendChild(div);
})();

(function(){
    asignMenuEvent();
    asignNavEvent();
})();
