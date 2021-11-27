const express = require('express');

const userController = require('./controllers/users.controller');
const bookController = require('./controllers/books.controller');
const authorController = require('./controllers/author.controller');
const sectionsController = require('./controllers/sections.controller');
const checkinController = require('./controllers/checkIn.controller');
const checkoutController = require('./controllers/checkOut.controller')


const app = express(); 

app.use(express.json());

app.use('/users' ,userController );
app.use('/books' , bookController );
app.use('/author' ,authorController );
app.use('/sections' ,sectionsController );
app.use('/checkin' ,checkinController );
app.use('/checkout' ,checkoutController );


module.exports = app;
