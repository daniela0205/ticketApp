var express = require('express');

var TicketController = require('../controllers/ticket');

var router = express.Router();

// Router to access the ticket by ID
router.get('/ticket/:id', TicketController.getTicket);

//Router to access all ticket
router.get('/tickets', TicketController.getAllTickets);




module.exports =router;