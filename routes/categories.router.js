const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.services');

const services = new CategoriesService();
//-------- SEND PARAMS-------------//
router.get('/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId} = req.params;
  const algo = services.find(categoryId,productId);
  res.json(algo);
});

module.exports = router;
