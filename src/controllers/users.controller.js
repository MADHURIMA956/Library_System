const express = require('express');

const User = require('../models/users.model');

const crudController = require('./CRUD.controller');

const router = express.Router();

//USER CRUD

router.post('' , crudController.post(User));
router.get('', crudController.getAll(User));
router.get('', crudController.getOne(User));
router.patch('', crudController.updateOne(User));
router.delete('', crudController.deleteOne(User));

module.exports = router;