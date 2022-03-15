import {fn} from './modules/function.js';
addEventListener("DOMContentLoaded", async()=>{
    //Peticion al archivo PHP
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();
    // selecion del DOM 'maquetacion web'
    let content = document.querySelector(".content");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");

    console.log(obj);

    // Implemetacion del modulo
    titulo.insertAdjacentText("beforeend", obj.inicio.titulo);
    parrafo.insertAdjacentText("beforeend", fn.descriptcion(obj.inicio));

    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);

})

