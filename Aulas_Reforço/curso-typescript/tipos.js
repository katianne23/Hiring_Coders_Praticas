"use strict";
// Boolean
const contaPaga = false;
// Number
const idade = 23;
const avaliacao = 4.5;
// String
const nome = 'Katianne Araújo';
// Array
const idades = [23, 28, 45];
const idades2 = [12, 34, 56, 33];
// Tuple
let jogadores;
jogadores = ['Katianne', 'Frajola', 'Pandinha', 2, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statuDaAprovacao = StatusAprovacao.Aprovado;
// Any
const retornoDaApi = ['123', 'Katianne', false];
const retornoDaApi2 = {
// ................
};
// Void 
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
const u = undefined;
const n = null;
// Object
function criar(Object) {
    //.....
}
criar({
    propriedade: 1,
});
// criar('Katianne') Dá erro
// Never
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo Falhou');
}
// Union Types
function exibirNota(nota) {
    console.log(`A nota é nota ${nota}`);
}
exibirNota(10);
exibirNota('10');
//type Funcionarios = Array<Funcionario>; // String[]
const funcionarios = [{
        nome: 'katianne',
        sobrenome: 'Araujo',
        dataNascimento: new Date(),
    },
    {
        nome: 'Frajola',
        sobrenome: 'Araujo',
        dataNascimento: new Date(),
    }
];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario:', funcionario.nome);
    }
}
// Nulos
let altura = 1.0;
altura = null;
const contato = {
    nome: 'Katianne',
    telefone1: '345345554',
    telefone2: '2222',
};
// Type Assertion
const minhaIdade = 22;
minhaIdade.toString();
// const input = document.getElementById('numero1') as HTMLInputElement;
const input = document.getElementById('numero1');
console.log(input.value);
