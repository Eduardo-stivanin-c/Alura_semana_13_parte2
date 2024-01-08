import { conectaApi } from "./conexaoAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
//trando erro de vídeo
try {
    
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
} catch (e) {
    //laerta de erro no meu do Javascript
    alert(e);
}
}

formulario.addEventListener("submit", evento => criarVideo(evento))