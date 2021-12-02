const express = require('express');

const Book = require('../models/books.model');



const crudController = require('./CRUD.controller');

const router = express.Router();

//Book CRUD

router.post('' , crudController.post(Book));
router.get('', crudController.getAllWithTwoPopulate(Book , 
    { path : 'author_id' , select : 'first_name'},
    {path : 'section_id' , select : 'name'}
    ));
router.get('', crudController.getOne(Book));

router.patch('', crudController.updateOne(Book));
router.delete('', crudController.deleteOne(Book));


module.exports = router;