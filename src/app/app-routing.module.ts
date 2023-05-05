import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EdicionComponent } from './components/edicion/edicion.component'
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ValidatorComponent } from './components/registro/validator.component';




const routes: Routes = [
 {path:'', component : HomeComponent},
 {path:'login',component : LoginComponent},
 {path:'edicion', component : EdicionComponent},
 {path:'sobremi', component : SobreMiComponent},
{path:'educacion',component : EducacionComponent},
{path:'experiencia', component: ExperienciaComponent},
{path:'registro', component: ValidatorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
