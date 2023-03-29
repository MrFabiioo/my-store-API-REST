const express= require('express');
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta');
});
app.get('/products',(req,res)=>{
  res.json([{name:'product 1',price:1000},{name:'product 2',price:2000}]);
});

app.listen(port,()=>{
  console.log('mi port '+port);
});
