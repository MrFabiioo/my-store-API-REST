// ----imports-----//
const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.services');

//----instances ----//

const services = new ProductsService();

//---- GET PRODUCTS  -------//
router.get('/',(req,res)=>{
  const products = services.find();
  res.json(products);
});

router.get('/filter',(req,res)=>{
  res.send('Soy un ♥ filtro')
});

//-------- PRODUCTS FOR ID ----------//
router.get('/:id',(req,res)=>{
  const {id}=req.params;
  const product = services.findOne(id);
  res.json(product)

});

//--------CREATE PRODUCTS WITH POST---------//

router.post('/',(req,res)=>{
  const body= req.body;
  const newProduct = services.create(body);
  res.status(201).json(newProduct);
});

//------UPDATE PRODUCTS WITH PUT AND PATCH--------//
router.patch('/:id',(req,res)=>{
  const {id}= req.params;
  const body= req.body;
  const product = services.update(id,body);
  res.json(product);
});

//------DELETE PRODUCTS WITH PUT AND DELETE--------//
router.delete('/:id',(req,res)=>{
  const {id}= req.params;
  const product = services.delete(id);
  res.json(product);
});

module.exports = router;
