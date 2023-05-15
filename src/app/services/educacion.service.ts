import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personaEstudios } from '../model/personaEstudios.interface'; 


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  gEstudio: personaEstudios[]=[];

  constructor(private http:HttpClient){ }
  Url=  "http://../login/edicion/persona/estudios";


getEstudio(){
  Observable<personaEstudios>;
 return this.http.get<personaEstudios[]>(this.Url);
}

createEstudio(gEstudio:personaEstudios){
  return this.http.post<personaEstudios>(this.Url,gEstudio);
}

getEstudioId(id:number){
    Observable<personaEstudios>;
  return this.http.get<personaEstudios>(this.Url+"/"+ id);
}
updateEstudio(gEstudio:personaEstudios){
  return this.http.put<personaEstudios>(this.Url+"/" + gEstudio.id,gEstudio);
}

deleteEstudio(gEstudio:personaEstudios){
return this.http.delete<personaEstudios>(this.Url+"/"+gEstudio.id);
}

}

