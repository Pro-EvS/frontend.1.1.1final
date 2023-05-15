import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../model/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private authFire:AngularFireAuth) {}

  async login (user: User){

    const {email,password}= user
    try {
      return await this.authFire.signInWithEmailAndPassword(email,password).then(result=>{
        console.log('Logueado correctamente',result);
      });
    } catch (error){
      console.log('Hubo un error en el login',error);
      return null;
    }
   }


}
