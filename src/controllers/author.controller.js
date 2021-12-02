const express = require('express');

const Author = require('../models/author.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(Author));
router.get('', crudController.getWithOnePopulate(Author , 
    { path : 'user_id' , select : 'first_name'} ,
    ));
router.get('/:id', crudController.getOne(Author));

router.patch('/:id', crudController.updateOne(Author));
router.delete('/:id', crudController.deleteOne(Author));

module.exports = router;