import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { personaEstudios } from 'src/app/model/personaEstudios.interface'

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent  implements OnInit{

 
  gEstudio!: personaEstudios;
  personaEstudios: any[] = [];
  p: any;

  constructor(private router:Router, private service:EducacionService){ }
 

  Guardar(gEstudio:personaEstudios): void{
    this.service.createEstudio(gEstudio)
  .subscribe(data=>{
    this.gEstudio=data;
  alert("Se agrego con exito");
  this.router.navigate(['educacioncom'])
  })
 }

ngOnInit(): void {
  }


  editar(gEstudio:personaEstudios): void{
    this.service.getEstudioId(+1)
    .subscribe(data=>{
      this.gEstudio=data;
      this.router.navigate(['educacioncom'])
    })
  }
  
 actualizar(gEstudio:personaEstudios): void{
  this.service.updateEstudio(gEstudio)
  .subscribe(data =>{
  this.gEstudio= data;
  alert("se a podido actualizar correctamente");
  this.router.navigate(['educacioncom']);
  })
  
}

  borrar(gEstudio:personaEstudios): void{
this.service.deleteEstudio(gEstudio)
.subscribe(data=>{
  this.gEstudio=this.gEstudio.filter((p: personaEstudios)=> p!==gEstudio);
  alert("objeto eliminado");
})
  }
}


