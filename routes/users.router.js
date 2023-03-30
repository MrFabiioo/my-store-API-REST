const express = require('express');
const router = express.Router();
//--------- SEND FOR PAGINATION ---------//
router.get('/',(req,res)=>{
  const {limit,offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('ERROR 404 PAGE FOUND ')
  }
});

module.exports= router;
