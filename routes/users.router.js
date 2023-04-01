const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.services');

const services = new UsersService();
//--------- SEND FOR PAGINATION ---------//
router.get('/',(req,res)=>{
  const {limit,offset} = req.query;
  const response = services.findLimit(limit,offset);
  if (response) {
    res.json(response);
  } else {
    res.send('ERROR 404 PAGE FOUND ')
  }
});

module.exports= router;
