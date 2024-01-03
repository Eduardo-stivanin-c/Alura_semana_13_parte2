//Para saber mais 
const nomes=["Teste","Bagulhos","Windows",'Freway'];
/*

for (let i = 0; i < array.length; i=i+1) {
console.log(nomes[i],i); //testes,Bagulhos,Windows,Freeway

    

}

*/
nomes.forEach(function(nome,i)  {
    console.log(nome,i);//testes,Bagulhos,Windows,Freeway
});

/*
function nossoForEach(arr,funcao) {
 
    for (let i = 0; index < arr.length; i=i+1) {
        const  itemDoArray=arr[i];
        funcao(itemDoArray,i)

       
    }
}

*/
const  retornoDoNossoMap=NossoMap.map(function(nome,i)  {
    console.log(nome,i);//testes,Bagulhos,Windows,Freeway
return `<li>${nome}</li>`
}
);

function NossoMap(arr,funcao) {
    const novoArray=[];
    for (let i = 0; i < arr.length; i=i+1) {
        const itemDoArray = arr[i];
       novoArray.push(funcao(itemDoArray,i));
    }
    return novoArray;
}


/*



nossoForEach(nomes,function(nome,id){
//console.log(nome,i);

});

*/


/**/

const retornoDoForEach=nomes.forEach(function(nome,i)  {
    console.log(nome,i);//testes,Bagulhos,Windows,Freeway
});

console.log(retornoDoForEach);//undefined

const  retornoDoMap=NossoMap(function(nome,i)  {
    console.log(nome,i);
    return nome.toUpperCase()
});

console.log(retornoDoMap)//[undefined,undefined,undefined,undefined]
 