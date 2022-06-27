const pessoa = {
    nome: 'katianne',
    sobrenome: 'Araújo',
    idade: 22,
    profissão: 'Programadora web'
}
console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissão = pessoa.profissão;

let { nome, sobrenome, idade, profissão } = pessoa;
console.log(nome, sobrenome, idade, profissão);