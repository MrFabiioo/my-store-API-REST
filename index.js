const routerApi = require('./routes');
const express= require('express');
const {errorHandler,logErros,boomErrorHandler} = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ["http://localhost:5500", "https:// myapp.com"];
const options = {
  origin:(origin,callback)=>{
    if (whitelist.includes(origin)) {
      callback(null,true);
    } else {
      callback(new Error('ACCESO NO PERMITIDO !!'));
    }
  }
}
app.use(cors(options));

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
