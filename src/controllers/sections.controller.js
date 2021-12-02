const express = require('express');

const Section = require('../models/sections.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(Section));
router.get('', crudController.getAll(Section));
router.get('/:id', crudController.getOne(Section));
router.patch('/:id', crudController.updateOne(Section));
router.delete('/:id', crudController.deleteOne(Section));

module.exports = router;