import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, peliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent} from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';
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
generosSeleccionados:SelectorMultipleDTO[]=[{llave:2,valor:"Comedia"}];
  generosNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Drama"},
    
    {llave:3,valor:"Gore"},

  ];
  cinesSeleccionados:SelectorMultipleDTO[]=[{llave:2,valor:"Cinemex"},];
  cinesNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Cinepolis"},
    
    {llave:3,valor:"Cineteca"},

  ];
  actoresSeleccionados:actorAutoCompleteDTO[]=[
    {
      id: 2,
      nombre: 'Jennifer Lopez',
      personaje: "",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/210120-D-WD757-1975_-_Jennifer_Lopez_at_the_US_Capitol_%2850860511978%29_%28cropped%29.jpg/220px-210120-D-WD757-1975_-_Jennifer_Lopez_at_the_US_Capitol_%2850860511978%29_%28cropped%29.jpg"
    },
  ];
  guardarCambio(pelicula:PeliculaCreacionDTO){
    console.log("creacion de pelicula",pelicula);
  }
}
