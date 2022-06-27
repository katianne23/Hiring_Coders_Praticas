// Criando uma variavel do tipo constante
const nomes = ['Ana','Pedro', 'Lucas', 'Maria', 'João'];
console.log(nomes [0]);
var conteudo = (nomes[0]+ "-"+ nomes[1] + "-" 
+ nomes[2] + "-" + nomes[3] + "-" +nomes[4]);

//Criando um laço de repetição
for (cont = 0; cont < 5; cont++){
    console.log(nomes[cont]);
}

// Criando uma nova variavel para adicionar o nome
var nome = "Katianne Araújo";

//Criando uma variavel
var fs = require('fs');
fs.writeFile("./meuarquivo.txt" ,conteudo, function(erro){
    if(erro){
        throw erro; // Comando throw permite verificar o input / output
    } 

    console.log("Arquivo Salvo");
});