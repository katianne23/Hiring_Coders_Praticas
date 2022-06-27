class livros{ // Desenvolvendo dentro da classe um construtor
    constructor(titulo, autor,editora,pagina){
    this.titulo=titulo
    this.autor=autor
    this.editora=editora
    this.pagina=pagina

    }

    // Metodos
    vendaTitulo(){ // Criando um metodo dentro da nossa classe
        console.log(`Titulo do Livro : ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
    }

    descricaoTitulo(){ // Novo metodo
        console.log(`Editora : ${this.editora}`);
        console.log(`Paginas : ${this.pagina}`);


    }
}

const dados = new livros("Aprenda JavaScript", "RIcador",
    "Editora Livro", "200");
dados.vendaTitulo();
dados.descricaoTitulo();