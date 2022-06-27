programa {
	funcao inicio() {
		inteiro n, numero, quadrado 
		
		escreva("Qual o numero final? ")
		leia(n)
		
		para( numero = 2 ; numero <= n ; numero = numero + 2){
		    escreva(numero + "^2 = " + (numero * numero) + "\n")
		}
	}
}
