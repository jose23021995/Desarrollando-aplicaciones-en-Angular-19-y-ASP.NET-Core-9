import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent,MatButtonModule,MatIconModule
  ],
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
