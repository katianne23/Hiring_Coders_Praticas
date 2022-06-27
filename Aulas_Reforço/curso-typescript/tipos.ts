// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: String = 'Katianne Araújo';

// Array
const idades:number[] = [23, 28, 45];
const idades2: Array<number> = [12,34,56,33];

// Tuple
let jogadores:[string, string, string, number, boolean];
jogadores = ['Katianne', 'Frajola', 'Pandinha', 2, true];

// Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statuDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


// Any
const retornoDaApi: any = ['123', 'Katianne', false];
const retornoDaApi2: any = {
    // ................
};

// Void 
function printarNaTela(msg: string): void{
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(Object: object){
    //.....
}
criar({
    propriedade: 1,
})
// criar('Katianne') Dá erro

// Never
function loopInfinito(): never{
    while (true){
    }
}

function erro(mensagem: string):never{
    throw new Error(mensagem);
}

function falha(): never{
    return erro('Algo Falhou');
}

// Union Types
function exibirNota (nota:number | string){
    console.log(`A nota é nota ${nota}`);
}

exibirNota(10);
exibirNota('10');

// Alias

type Funcionario ={
    nome: String;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<Funcionario>; // String[]
const funcionarios: Funcionario[]= [{
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

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario:', funcionario.nome);
    }
}

// Nulos
let altura: number | null = 1.0;
altura = null;

type Contato = {
    nome: string;
    telefone1: string,
    telefone2: string | null;
}

const contato: Contato = {
    nome: 'Katianne',
    telefone1: '345345554',
    telefone2: '2222',
}

// Type Assertion
const minhaIdade: any = 22;
(minhaIdade as number).toString();

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);