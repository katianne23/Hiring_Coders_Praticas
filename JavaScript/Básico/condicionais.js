//If else
var nome = "Araujo";

if (nome === "Katianne"){
    console.log("Legal! Seu nome é este mesmo");
} else if (nome === 'Araujo') {
    console.log("Tudo bem! Voce também serve");
} else{
    console.log("Que pena! Seu nome não é Katianne");
}

//Switch

var nome = 'Katianne';

switch (nome){
    case 'Katianne':
        console.log('legal? Voce é a katianne mesmo!');
        break;
    case 'Araujo':
        console.log('Ah! Você também serve');
        break;
    default:
        console.log('Que pena! Você não é quem eu estou procurando');
        break; 
}