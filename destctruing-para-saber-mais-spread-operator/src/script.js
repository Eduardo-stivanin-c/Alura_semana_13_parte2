const numerosPares=[2,4,6]
const numerosImpares=[1,3,5]
const numeros=[...numerosPares,...numerosImpares];
                  //os ... é pra revceber varios valores numa matriz na terceira variavel
//const [num1,num2,...outrosNumeros]=[1,2,3,4,5]
//nome só e´usando se valor padrõia não existir
//const [nome1="Eduardo"] =[1]

const pessoa={
  nome:"Edu",
  idade:21
  
}

const pessoaComTelefone={
  ...pessoa,
  telefone:197344004
}
//pega item da matriz chamda pessoa
const {idade}=pessoa;

//console.log(idade);




function imprimirDados({nome,idade}){
  /// filtra apenas nome e idade dados indenpendento do nome do objeto
//const {nome,idade}=dados
  console.log(nome,idade)
}


imprimirDados(pessoa)