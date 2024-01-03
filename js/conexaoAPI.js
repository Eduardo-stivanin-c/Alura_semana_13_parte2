"use strick";
async function listaVideos() {
    //se  trocarem a "porta" na proxima versão troca o 3000 pela porta que estivierem usando
    const conexao= await fetch("http://localhost:3000/videos");
    //da prolme a quocm bloqueadores de anbuncio e mna mairoiadaos navegaore
 const conexaoConvertida=await conexao.json();
    return conexaoConvertida; 
 }

 //listaVideos()

 function criaVideo() {
   // pega video via methodo post
   const conexao=await fetch("http://localhost:3000/videos")

 }

 export const  conectaApi={
    listaVideos
 }
