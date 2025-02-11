import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, peliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent} from "../formulario-peliculas/formulario-peliculas.component";
@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
@Input(  {transform:numberAttribute})
  id!:number;
  pelicula:peliculaDTO={id:1,titulo:"spoder man",fechaLanzamiento:new Date('2018-07-25'),poster:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg"}
guardarCambio(pelicula:PeliculaCreacionDTO){
    console.log("creacion de pelicula",pelicula);
  }
}
