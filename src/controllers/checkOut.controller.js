const express = require('express');

const CheckOut = require('../models/checkOut.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(CheckOut));
router.get('', crudController.getAllWithTwoPopulate(CheckOut , 
    { path : 'user_id' , select : 'first_name'},
    {path : 'book_id' , select : 'book_name'}
    ));
router.get('', crudController.getOne(CheckOut));
router.patch('', crudController.updateOne(CheckOut));
router.delete('', crudController.deleteOne(CheckOut));

module.exports = router;