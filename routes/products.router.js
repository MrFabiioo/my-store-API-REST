// ----imports-----//
const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.services');

//----instances ----//

const services = new ProductsService();

//---- GET PRODUCTS  -------//
router.get('/',async (req,res)=>{
  const products = await services.find();
  res.json(products);
});

router.get('/filter',(req,res)=>{
  res.send('Soy un ♥ filtro')
});

//-------- PRODUCTS FOR ID ----------//
router.get('/:id',async (req,res,next)=>{
try {
  const {id}=req.params;
  const product = await services.findOne(id);
  res.json(product)
} catch (error) {
  next(error);
}

});

//--------CREATE PRODUCTS WITH POST---------//

router.post('/',async (req,res)=>{
  const body= req.body;
  const newProduct = await services.create(body);
  res.status(201).json(newProduct);
});

//------UPDATE PRODUCTS WITH PUT AND PATCH--------//
router.patch('/:id',async (req,res,next)=>{
try {
  const {id}= req.params;
  const body= req.body;
  const product = await services.update(id,body);
  res.json(product);
} catch (error) {
    next(error);
}
});

//------DELETE PRODUCTS WITH PUT AND DELETE--------//
router.delete('/:id',async (req,res)=>{
  const {id}= req.params;
  const product = await services.delete(id);
  res.json(product);
});

module.exports = router;
