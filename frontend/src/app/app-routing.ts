import{BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [  
    {
      path:'',
      component:TicketsComponent
    },
    {
      path:'ticket/:id',
      component:DetailComponent
    },
    {
      path:'**',
      component:ErrorComponent
    }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule,HttpClientModule,FormsModule],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }

