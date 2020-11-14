
//get the ticket data from Model ticket and  json file
var ticketData = require('../models/ticket');

const express = require('express')
const app = express();

//this line is required to parse the request body
app.use(express.json());
console.log(ticketData);

var controller = {

  

  // function to get all tickets
  getAllTickets:function(req,res){
 
    const tickets = ticketData;
    return res.status(200).send(tickets);
  },

 
  getTicket:function( req , res ){
 
   // var ticketId = req.params.id; 
     
   var ticketId = Number(req.params.id); 
   

    if(ticketId == null)return res.status(404).send({message:'the ticket not exist'});
    
    const findExist = ticketData.tickets.find(item => item.id === ticketId);       
  
  
    if(!findExist) return res.status(404).send({message:'the ticket was not found '});

        return  res.status(200).send({findExist});
  },



};

module.exports = controller;