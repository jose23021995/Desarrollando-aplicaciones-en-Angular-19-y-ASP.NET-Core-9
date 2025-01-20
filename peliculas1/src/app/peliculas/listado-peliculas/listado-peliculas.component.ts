import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @Input({required:true})

  peliculas!: any[];

  duplicarNumero(valor:number){
    return valor *valor;
  }
}
