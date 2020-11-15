import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';  
import { Observable} from 'rxjs/Observable';
import {Ticket} from '../models/ticket';
import {Global} from './global';

// here I applied the injection dependecy to define the differents service that will have the site
@Injectable()
export class TicketService{
    public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
  
    getTickets(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'tickets',{headers:headers});
    }

    getTicket(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'ticket/'+id,{headers:headers});
    }
   

}