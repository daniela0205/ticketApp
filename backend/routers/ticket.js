var express = require('express');

var TicketController = require('../controllers/ticket');

var router = express.Router();






router.get('/ticket/:id', TicketController.getTicket);


router.get('/tickets', TicketController.getAllTickets);




module.exports =router;