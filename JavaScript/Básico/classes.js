class matematica {
    soma(valorA, valorB){
        return valorA + valorB;
    }

    subtracao(valorA, valorB){
        return valorA - valorB;
    }
}

var instanciaMatem├ítica = new matematica();

var resultado = instanciaMatem├ítica.soma(2, 8);
var resultadoSub = instanciaMatem├ítica.subtracao(10, 8);
console.log(resultado);
console.log(resultadoSub);