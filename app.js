var express = require('express');
var app = express();
const adminRoutes =  require('./routes/admin');
const cookieParser = require('cookie-parser');
const { set } = require('express/lib/response');

//Para utilizar arquivos estáticos
app.use(express.static('public'));

app.use(cookieParser());

app.use(express.json());

app.use((req, res, next)=>{


   console.log('Executando a função Middleware em nível de aplicação');

  return next();
})

app.get('/setcookie', (req, res) =>{

    res.cookie('user', 'Teste Fernanda', {maxAge: 9000000, httpOnly: true});
    return res.send('Cookie foi gravado com sucesso!!!')
});


app.get('/getcookie',(req, res)=>{

  let user = req.cookies['user']

  if(user){
    return res.send(user); 
  }
});

app.get('/', (req, res)=>{
  res.send('Teste')
});


app.use('/admin', adminRoutes);

app.get('*', (req, res,next)=>{
  setImmediate(()=>{

    next(new Error('Ops! Temos um erro'));

  });
});

//Middleware de erro
app.use((err, req, res, next)=>{

  console.log(err.stack);
  res.status(500).json({message: err.message});
});


app.listen(3000, ()=>{

console.log('Server running!!')

})

module.exports = app;
