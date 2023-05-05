import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogApComponent } from './components/log-ap/log-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { RedSocialComponent } from './components/red-social/red-social.component';
import { BtnlogComponent } from './components/btnlog/btnlog.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { ValidatorComponent } from './components/registro/validator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogApComponent,
    BannerComponent,
    RedSocialComponent,
    BtnlogComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EdicionComponent,
    ValidatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
