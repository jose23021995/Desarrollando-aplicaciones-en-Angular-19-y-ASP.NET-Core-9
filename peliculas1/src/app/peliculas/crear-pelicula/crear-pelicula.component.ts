import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  generosSeleccionados:SelectorMultipleDTO[]=[];
  generosNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Drama"},
    {llave:2,valor:"Comedia"},
    {llave:3,valor:"Gore"},

  ];
  cinesSeleccionados:SelectorMultipleDTO[]=[];
  cinesNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Cinepolis"},
    {llave:2,valor:"Cinemex"},
    {llave:3,valor:"Cineteca"},

  ];
  actoresSeleccionados:actorAutoCompleteDTO[]=[];
  guardarCambio(pelicula:PeliculaCreacionDTO){
    console.log("creacion de pelicula",pelicula);
  }
}
