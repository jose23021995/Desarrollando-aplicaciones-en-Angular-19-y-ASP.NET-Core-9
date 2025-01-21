import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({required:true, transform:(valor:number) => Array(valor).fill(0)})
  maximoRating!:number[];
  @Input() ratingSeleccionado=0;
  @Output()votado=new EventEmitter<number>();
  //maximoRatingArreglo: any[]=[];
  ratingAnterior=0;
  manejasMouseEnter(indice:number){
    this.ratingSeleccionado=indice+1;
  }
  manejarClick(indice:number){
    this.ratingSeleccionado=indice+1;
    this.ratingAnterior=this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
  manejasMouseLive(){
    if (this.ratingAnterior !==0) {
      this.ratingSeleccionado=this.ratingSeleccionado;
    }else{
      this.ratingSeleccionado=0;

    }
  }
}
