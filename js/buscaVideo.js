//buscavideo.js


//improtando arquvio de conexaõ só Deus sabe
import { conectaApi } from "./conexaoAPI.js";
import constroiCard   from "./mostrarVideos.js";
//"use strick";
//pesquisa dinamenica


async function buscarVideo(evento) {
    evento.preventDefault();
    //pegar valour do campo de pesquisa e restorna isso filtrado
    //data-pesquiasa aAulura inventoori esssa gambiara
    //data-pesquias é nosso cmpao de pesuia neste  exercicio
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca =await conectaApi.buscaVideo(dadosDePesquisa);
   //console.log(busca);
const lista=document.querySelector("[data-lista]")


//limpando a tela de items antes do pesquisado
while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}



//inseindo item pesqusiado
busca.forEach(elemento => lista.appendChild(
//reuso de código 
    constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)
) );


//erro na barra de busca
if (busca.length==0) {
    //gerando titulo 2 pra mensagem de erro
    lista.innerHTML=`<h2 class="mensagem_titulo">Não existem videos com esse termo </h2>`
}

}

botaoDePesquisa.addEventListener("click",evento => buscarVideo(evento));

//pega botção com figura de lupa na tela
//const botaoDePesquisa=document.querySelector("[data-botao-pesquisa]");


console.log(botaoDePesquisa)

//console.log(buscarVideo("memes"));
//botaoDePesquisa.onclick="evento => buscarVideo(evento)"
console.log("buscarVideo.js ok");


//=> é um função quem o function


//)