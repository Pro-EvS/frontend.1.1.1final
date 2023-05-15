import { Component, } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form: any;

constructor(private formBuilder: FormBuilder, private router:Router ){
  this.form= this.formBuilder.group({
    password:['',[]],
    email:['',[]],
  })
 }
 onLogin(){
  this.form.value;
  this.router.navigate(['edicion'])
 }


  


}

