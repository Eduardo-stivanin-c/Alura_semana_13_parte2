"use strick";
        async function listaVideos() {
        //se  trocarem a "porta" na proxima versão troca o 3000 pela porta que estivierem usando
        const conexao = await fetch("http://localhost:3000/videos");
                //da prolme a quocm bloqueadores de anbuncio e mna mairoiadaos navegaore
                const conexaoConvertida = await conexao.json();
                return conexaoConvertida;
        }

//listaVideos()

async function criaVideo(titulo, descricao, url, imagem) {
// pega video via methodo post
//OS NÃO DECLARA MAIS NADA É METODO GET PRO PADRÃO 
const conexao = await fetch("http://localhost:3000/videos", {
method:"POST",
        headers:{

        "Content-type" : "aplication/json"

                },
        body: JSON.stringify({
        titulo: titulo,
                descricao: `${descricao} mil descricao `,
                url:url,
                imagem:imagem
                })


                
                
        }
        );
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;

}

export const  conectaApi = {
listaVideos,
criaVideo

}