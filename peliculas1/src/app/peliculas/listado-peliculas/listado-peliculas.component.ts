import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{

  @Input({required:true})

  peliculas!: any[];

  duplicarNumero(valor:number){
    return valor *valor;
  }
  remover(peliculas:any){
    const indice = this.peliculas.findIndex((peliculaActual:any)=> peliculaActual.titulo === peliculaActual.titulo);
    this.peliculas.splice(indice,1);
  }
  agregarPelicula(){
    this.peliculas.push(
      {
        titulo:"inception",
        fechaLanzamiento:new Date('2012-07-03'),
        precio:500,
        poster: null

      }
    );
  }
}
