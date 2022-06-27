const Cliente = require('../../models/cliente');
describe('Clientes', () =>{
    beforeEach(async () =>{
    })

    it('Valida propriedades de um cliente', async () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.tobeUndefined();
        expect(cliente.nome).not.tobeUndefined();
        expect(cliente.telefone).not.tobeUndefined();
    });

    it('Retorna todos', async () => {
        let clientes = Cliente.todos();
        expect(clientes.lenght).toEqual(10)
    });

    it('Nome do cliente Upercase', async () => {
        let cliente = Cliente.primeiro();
        cliente.nome = 'katianne'
        expect(cliente.nomeUpercase()).toEqual("KATIANNE")
    });

    
})