function principal(): void{
  console.log('executando');
}

principal();

function funcaoQueNuncaRetorna():never{
      throw new Error('ola');
}

const a = funcaoQueNuncaRetorna();