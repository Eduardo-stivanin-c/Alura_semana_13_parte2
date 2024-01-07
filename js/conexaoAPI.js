async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}




async function buscaVideo(termoDeBusca) {
        //pesquisa no servidor Json

 const conexao = await fetch(`http://localhost:3000/videos/?q=${termoDeBusca}`);

 //converte em  uma tablea de  Json
 //const conexaoConvertida=await conexao.json();
 return conexao.json();









}/*async function buscaVideo(url) {
    const response = await fetch("http://localhost:3000?/videos/q="+url);
  
    return response.json();
  }*/




export const conectaApi = {
    listaVideos,
    criaVideo,
buscaVideo
//exportando funções

}
















/*
referncias 
github.com/skidding/react-mock/get.js

*/

