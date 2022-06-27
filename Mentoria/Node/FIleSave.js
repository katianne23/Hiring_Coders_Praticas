function salvar(){

    // Pegando o conteudo da caixa de texto
    let texto = document.getElementById("texto").value
    
    // Declarando uma Variável para o nome do arquivo
    let titulo = document.getElementById("titulo").value

    alert(texto);
    alert(titulo);
    // Criar uma variavel de memória 
    let blob = new Blob([texto],{

        // Criando um tipo de tratammento para as informações
        // Digitadas no campo de texto
        type: 'text/plain;charset=utf-8'

    });

    // Criando o metodo para salvar o arquivo
    saveAS(blob, titulo+".txt");
  
}

function mensagem(){
    alert("Esta tudo rodando?");
}