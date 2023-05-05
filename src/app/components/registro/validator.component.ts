import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {
  
  usuario={
    username:'',
    email:'',
    password:''
}
}
