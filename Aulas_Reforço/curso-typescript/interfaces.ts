interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(){
    return{
        nome: 'Katianne',
        email: 'Katianne@gmail.com'
    }
}

function setUser(usuario: Usuario){
    // ....
}
