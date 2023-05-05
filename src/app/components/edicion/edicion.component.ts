import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent {
  
  constructor(private router:Router){ }

  sobremi(){
    this.router.navigate(['sobremi'])
  }

  experienciai(){
    this.router.navigate(['experiencia'])
  }

  educacion(){
    this.router.navigate(['educacion'])
  }
}
