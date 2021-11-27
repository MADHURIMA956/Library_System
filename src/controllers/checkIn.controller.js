const express = require('express');

const CheckIn = require('../models/checkIn.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(CheckIn));
router.get('', crudController.getWithTwoPopulate(CheckIn , 
    { path : 'user_id' , select : 'first_name'},
    {path : 'book_id' , select : 'book_name'}
    ));
router.get('', crudController.getOne(CheckIn));
router.patch('', crudController.updateOne(CheckIn));
router.delete('', crudController.deleteOne(CheckIn));

module.exports = router;