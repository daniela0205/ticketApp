import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../models/ticket';
import {TicketService} from '../../services/ticket.service';
import {Global} from '../../services/global';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {
  public tickets: Ticket[];
  public url:string;


  constructor(private _ticketService: TicketService) { 
   this.url=Global.url;   
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    this._ticketService.getTickets().subscribe(
      response =>{
       
        if(response.tickets){
         this.tickets = response.tickets;
         console.log(response);
         }
      },
      error=>{
        console.log(<any>error);
      }
      
    )
  }

}
