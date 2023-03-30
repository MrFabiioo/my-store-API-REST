const routerApi = require('./routes');
const express= require('express');
const app = express();
const port = 3000;

// ------- HOME  --------//
app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

//----------- INITIALIZATION OF SERVER ---------//
app.listen(port,()=>{
  console.log('mi port '+port);
});
