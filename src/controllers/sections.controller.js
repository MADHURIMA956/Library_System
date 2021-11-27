const express = require('express');

const Section = require('../models/sections.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(Section));
router.get('', crudController.getAll(Section));
router.get('', crudController.getOne(Section));
router.patch('', crudController.updateOne(Section));
router.delete('', crudController.deleteOne(Section));

module.exports = router;