const livro = { //Objetos
    nome: "Aprenda JavaScript em uma semana",
    editora: "Editora Livro",
    autor: "Katianne Araújo",
    paginas: "200",

    venda: function(){ // Criando uma função
        console.log("O professor Ricardo indicou o livro " + this.nome +
        " da  " + this.editora); 
    }
}

livro.venda(); //Metodo