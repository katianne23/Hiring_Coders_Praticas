programa {
	funcao inicio() {
		inteiro idade, qtAnos, qtMeses, qtDias, sobra
		//Entrada: a idade em dias
		escreva("Digite a idade em dias:")
		leia(idade)
		
		//Processamento: dividir a idade por 365 e obter a quantidade de aos
		qtAnos = idade / 365
		
		// a partir da sobra da divisão anterio, fazer o seguinte:
		sobra = idade % 365
		
		//dividir o valor que sobrou por 30 e obter a quantidade
		// de meses (ja que 1 mes = 30 dias)
		qtMeses = sobra / 30
		
		//FInalmente pegar a sobra da divisão anterior, que ira resultar na quantidade de dias
		qtDias = sobra % 30
		
		//exibir as saídas
		escreva(qtAnos + " ano(s)\n")
		escreva(qtMeses + " mes(es)\n")
		escreva(qtDias + " Dia(es)\n")
	}
}
