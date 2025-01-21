import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit{
  ngOnInit(): void {
    this.maximoRatingArreglo= Array(this.maximoRating).fill(0);
  }
  @Input({required:true})
  maximoRating!:number;
  @Input() ratingSeleccionado=0;
  maximoRatingArreglo: any[]=[];
  ratingAnterior=0;
  manejasMouseEnter(indice:number){
    this.ratingSeleccionado=indice+1;
  }
  manejarClick(indice:number){
    this.ratingSeleccionado=indice+1;
    this.ratingAnterior=this.ratingSeleccionado;

  }
  manejasMouseLive(){
    if (this.ratingAnterior !==0) {
      this.ratingSeleccionado=this.ratingSeleccionado;
    }else{
      this.ratingSeleccionado=0;

    }
  }
}
