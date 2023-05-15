import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { EducacionComponent } from './components/educacion/educacion.component';



const routes: Routes = [
 {path:'', component : HomeComponent},
 {path:'login',component : LoginComponent},
 {path:'edicion', component : EdicionComponent},
 {path: 'educacioncom', component: EducacionComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
