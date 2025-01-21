import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ListadoPeliculasComponent, MenuComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}
