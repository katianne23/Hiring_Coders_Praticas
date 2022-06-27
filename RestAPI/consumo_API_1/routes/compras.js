var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criação de compras. */
router.post('/', function(req, res, next) {

  cielo.compra(req.body).then((result) =>{
    const paymentId =  result.Payment.PaymentId;
    cielo.captura(result.Payment.PaymentId).then((result) =>{
      if(result.Status == 2){
        res.status(201).send({
          "Status": "sucesso",
          "Message": "Compra realizada com sucesso",
          "ComprarId": paymentId
        });
      } else{
        res.status(402).send({
          "Status": "Falhou",
          "Message": "Compra não realizada, problema no pagamento "
        });
      }
    })
    .catch((err)=>{
      console.error(err);
    })
  });
 
});

/* GET Status de compras. */
router.get('/:compra_id/status', function(req, res, next) {
  cielo.consulta(req.params.compra_id).then((result)=>{
    let message = {};
    switch(result.Payment.Status){
      case '1':
        message ={
          'Status': 'Pagamento altorizado'
        };
        break;
      case '2':
        message ={
          'Status': 'Pagamento Realizado'
        };
        break;
      case '12':
        message ={
          'Status': 'Pagamento pendende'
        };
        break;
      default:
        message ={
          'Status': 'Pagamento Falhou'
        };
        break;
    }

    res.send(message);
  });
});

module.exports = router;
