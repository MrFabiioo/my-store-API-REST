const express = require('express');
const router = express.Router();
//-------- SEND PARAMS-------------//
router.get('/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId
  });
});

module.exports = router;
