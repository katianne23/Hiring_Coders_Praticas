class matematica {
    soma(valorA, valorB){
        return valorA + valorB;
    }

    subtracao(valorA, valorB){
        return valorA - valorB;
    }
}

var instanciaMatemática = new matematica();

var resultado = instanciaMatemática.soma(2, 8);
var resultadoSub = instanciaMatemática.subtracao(10, 8);
console.log(resultado);
console.log(resultadoSub);