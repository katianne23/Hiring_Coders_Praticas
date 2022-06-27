// Importação de biblioteca
import { createServer, IncomingMessage, ServerResponse }  from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import  {writeFile , readFile, unlink } from 'fs';

// Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true);

    var resposta;
    // Receber informações do usuario
    const params = parse(urlparse.search ? urlparse.search : '');
    
    // Criar um usuario - Atualiza um usuario
    if(urlparse.pathname == '/criar-atualizar-usuario'){
        // Salvar as informações
        writeFile('users/' + params.id +'.txt', JSON.stringify(params), function (err : any) {
          if (err) throw err;
          console.log('Saved!');
          
          resposta = 'Usuario criado/Atualizado com sucesso!'
  
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/plain');
          response.end(resposta);
        });
    }else if (urlparse.pathname == '/selecionar-usuario'){
        // Seleciona um usuario
        readFile('users/' + params.id + '.txt', function(err, data) {
          resposta = data;
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          response.end(resposta);
        });
    }

    // Remove um usuario
    else if (urlparse.pathname == '/remover-usuario'){
        unlink('users/' + params.id + '.txt', function (err) {
          console.log('File deleted!');
  
          resposta = err ? "usario nao encontrado." : "Usuario excluido.";
  
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/plain');
          response.end(resposta);
        }); 
      }
});

// Execução
server.listen( port, () => {
    console.log(`Server running on port ${port}`);
});

//http://localhost:5000/criar-atualizar-usuario?nome=katianne&idade=22&id=1
// http://localhost:5000/selecionar-usuario?id=1
// http://localhost:5000/remover-usuario?id=1

