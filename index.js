const routerApi = require('./routes');
const express= require('express');
const {errorHandler,logErros,boomErrorHandler} = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.use(express.json());


// ------- HOME  --------//
app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta');
});

routerApi(app);
app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);


//----------- INITIALIZATION OF SERVER ---------//
app.listen(port,()=>{
  console.log('mi port '+port);
});
