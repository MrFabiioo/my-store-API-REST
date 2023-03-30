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
  res.status(201).json({
    message:'product created',
    data:body,
  });
});

//------UPDATE PRODUCTS WITH PUT AND PATCH--------//
router.patch('/:id',(req,res)=>{
  const {id}= req.params;
  const body= req.body;
  res.json({
    message:'product updated',
    data:body,
    id,
  });
});

//------DELETE PRODUCTS WITH PUT AND DELETE--------//
router.delete('/:id',(req,res)=>{
  const {id}= req.params;
  res.json({
    message:'product updated',
    id,
  });
});

module.exports = router;
