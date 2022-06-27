// Inclusao dos pacotes
const express = require('express')
var mysql = require('mysql2');

// Instancia o express
const app = express()

// Definicao da porta
const port = 3000

// Abrindo conexao com base de dados
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sistema_noticias'
});

connection.connect();

// Serviço de Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {

  // Busca categorias
  connection.query('SELECT id, nome FROM sistema_noticias.categoria', function(err, rows, fields) {
    if (err) throw err;
    
    res.send(rows)
  });
})

// Serviço de busca de noticias
app.get(`/news-api/v1/categorias/:categoriaId/noticias`, (req, res) => {

 
  // Busca noticias de uma categorias
   connection.query('SELECT id, titulo FROM sistema_noticias.noticias WHERE id_categoria =' + req.params.categoriaId, function(err, rows, fields) {
     if (err) throw err;
     res.send(rows)
  });
})

// Serviço de busca de uma noticias
app.get(`/news-api/v1/categorias/:categoriaId/noticias/:noticiaId`, (req, res) => {

 
  // Busca noticias 
   connection.query('SELECT id, titulo, conteudo FROM sistema_noticias.noticias WHERE id_categoria =' + req.params.categoriaId + 
   ' AND id = ' + req.params.noticiaId, function(err, rows, fields) {
     if (err) throw err;

     res.send(rows[0])
  });
})


// Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
