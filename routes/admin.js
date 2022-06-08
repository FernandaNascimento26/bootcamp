const express = require('express');
const admin = express.Router();


function logReq(req, res, next){
  console.log('Executando a função Middleware para a rota de usuários');

  return next();
};

admin.get('/', logReq, (req, res)=>{
    res.send('Testando outra rota')
  })
  
  admin.get('/:id',(req, res)=>{
    res.send('Testando uma rota com parâmetro id == a: '+req.params.id)
  })
  
  admin.post('/',(req, res)=>{
  
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
    res.send('Testando via POST \n'+corpo)
  })
  
  admin.patch('/:id',(req, res)=>{
    res.send('Testando uma rota via PATCH com parâmetro id: '+req.params.id)
  })
  
  admin.delete('/:id',(req, res)=>{
    res.send('Testando uma rota via DELETE com parâmetro id: '+req.params.id)
  })
  
  module.exports = admin;