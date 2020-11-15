import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../models/ticket';
import {TicketService} from '../../services/ticket.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Global} from '../../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [TicketService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public ticket: Ticket;
  

  constructor(
    private _ticketService: TicketService,
    private _router:Router,
    private _route:ActivatedRoute
    ){ 
    this.url = Global.url;
  }

  ngOnInit(): void {

    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getTicket(id);
    });
  }

  getTicket(id){
    this._ticketService.getTicket(id).subscribe(
      response =>{
       
        this.ticket=response;
        console.log(this.ticket);
      },
      error => {
        console.log(<any>error);
      }
      
    );
  }


}
