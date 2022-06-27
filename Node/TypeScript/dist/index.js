"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação de biblioteca
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
// Definição de porta
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    const urlparse = url.parse(request.url ? request.url : '', true);
    var resposta;
    // Receber informações do usuario
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    // Criar um usuario - Atualiza um usuario
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // Salvar as informações
        (0, fs_1.writeFile)('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            resposta = 'Usuario criado/Atualizado com sucesso!';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    else if (urlparse.pathname == '/selecionar-usuario') {
        // Seleciona um usuario
        (0, fs_1.readFile)('users/' + params.id + '.txt', function (err, data) {
            resposta = data;
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    // Remove um usuario
    else if (urlparse.pathname == '/remover-usuario') {
        (0, fs_1.unlink)('users/' + params.id + '.txt', function (err) {
            console.log('File deleted!');
            resposta = err ? "usario nao encontrado." : "Usuario excluido.";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});
// Execução
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//http://localhost:5000/criar-atualizar-usuario?nome=katianne&idade=22&id=1
// http://localhost:5000/selecionar-usuario?id=1
// http://localhost:5000/remover-usuario?id=1
