/* global windows */

// /* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
// */
//
//use strick caça erros de forma smais facil

import { conectaApi } from "./conexaoAPI.js";

//"use strick";

const formulario=document.querySelector("[data-formulario]");


async function criarVideos(evento) {

    evento.preventDefault();

const imagem=document.querySelector("[data-imagem]").value;
console.log(imagem);
const url=document.querySelector("[data-url]").value;
const titulo=document.querySelector("[data-titulo]").value;
 //   pega arredoda para  inteiro mais proximo pseudoaleatorio number*10 p\ string texto
const descricao=Math.floor(Math.random()*10).toString();

//criar videos em cpódigo assincono
await conectaApi.criaVideo (titulo.value,descricao.value,url.value,imagem.value)


//redicionamento de pagina

//window.location.href="../pages/envio-concluido.html";

}

formulario.addEventListener("submit", evento => criarVideos(evento));

//extra de Eduiardo pra criar progrmar mais ropaido no Firefosx vendo as porpriedades
//console.log(formulario);