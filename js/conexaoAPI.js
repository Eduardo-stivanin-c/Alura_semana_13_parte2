async function listaVideos() {
    //se  trocarem a "porta" na proxima versão troca o 3000 pela porta que estivierem usando
    const conexao= await fetch("http://localhost:3000/videos");
    //da prolme a quocm bloqueadores de anbuncio e mna mairoiadaos navegaore
 const conexaoConvertida=conexao.json();
    return conexaoConvertida; 
 }

 //listaVideos()

 export const  conexaoAPI={
    listaVideos
 }