let estaAtivo: boolean;

//..

estaAtivo = true;

function mapearStatusDeUsuario(status:boolean){
    if(status){
        return `Usuario está ativo`
    } else {
        return 'Usuário não esta ativo'
    }
}

mapearStatusDeUsuario(true);