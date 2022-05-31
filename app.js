var express = require('express');
var app = express();

app.use(express.json());

const adminRoutes =  require('./routes/admin')

app.get('/', (req, res)=>{
  res.send('Teste')
})


app.use('/admin', adminRoutes);

app.listen(3000, ()=>{

console.log('Server running!!')

})

module.exports = app;
