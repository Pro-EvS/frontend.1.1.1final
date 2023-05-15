import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { personaEstudios} from 'src/app/model/personaEstudios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  
  gEstudio: personaEstudios[] = [];



  constructor(private service:EducacionService,private router:Router ){ }
  
  ngOnInit(): void {
      this.service.getEstudio()
      .subscribe(data =>{
        this.gEstudio = data;
      });
    }
  }

