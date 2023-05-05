import { Component, NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  usuario={
    email:'',
    password:''
};

constructor(private router:Router){}

   editar(){
    this.router.navigate(['editar'])
  }
  
 registro(){
  this.router.navigate(['registro'])
 }
}
