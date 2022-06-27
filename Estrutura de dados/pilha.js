var elemento = [];
var topo     = -1;
const max    = 10;

console.log("Hora de empilhar");
function push (num){
    if(topo < max){
        topo = topo + 1;
        elemento[topo] = num;
    } else {
        console.log("Pilha esta cheia");
    }
}
console.log("Hora de desempilhar")
function pop(){
    if(topo != 1){
        let num = elemento[topo];
        topo = topo -1;
        return num;
    }
    else{
        console.log("Pilha esta Vazia!");
    }
}

function estaVazia(){
    return topo == -1;
}


//Parte do codigo que usa a pilha
var numDecimal = 10;
var resto;

while (numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal /2);
}

while (!estaVazia()){
    console.log(pop());
}