import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinalPortfolio';

  constructor(private http:HttpClient){ }

  Url = "https://localhost:8080";

}
