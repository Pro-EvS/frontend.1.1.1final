import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnlog',
  templateUrl: './btnlog.component.html',
  styleUrls: ['./btnlog.component.css']
})
export class BtnlogComponent {

  constructor(private router:Router){ }

  login(){
    this.router.navigate(['login'])
  }
}
