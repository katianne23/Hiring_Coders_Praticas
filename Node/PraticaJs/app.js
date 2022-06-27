// Incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string'); 
const url = require('url');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // Localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
  
  var resposta;
  const urlparse = url.parse(req.url, true);
  
  // Receber infornamções do usuario
  const params = queryString.parse(urlparse.search);

    // Criar um usuario - Atualiza um usuario
    if(urlparse.pathname == '/criar-atualizar-usuario'){
      // Salvar as informações
      fs.writeFile('users/' + params.id +'.txt', JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved!');
        
        resposta = 'Usuario criado/Atualizado com sucesso!'

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });

      

    } else if (urlparse.pathname == '/selecionar-usuario'){
        // Seleciona um usuario
        fs.readFile('users/' + params.id + '.txt', function(err, data) {
          resposta = data;
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(resposta);
        });
    }
  // Remove um usuario
    else if (urlparse.pathname == '/remover-usuario'){
      fs.unlink('users/' + params.id + '.txt', function (err) {
        console.log('File deleted!');

        resposta = err ? "usario nao encontrado." : "Usuario excluido.";

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      }); 
    }

});

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// /criar-atualizar-usuario?nome=katianne&idade=22&id=1
// /criar-atualizar-usuario?nome=katianne Araujo&idade=22&id=1
// /selecionar-usuario?id=1
// /remover-usuario?id=1