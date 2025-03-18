import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiples',
  imports: [],
  templateUrl: './selector-multiples.component.html',
  styleUrl: './selector-multiples.component.css'
})
export class SelectorMultiplesComponent {
  @Input({required:true})
  Seleccionador!:SelectorMultipleDTO[];
  @Input({required:true})
  NoSeleccionador!:SelectorMultipleDTO[];
  seleccionar(elemento:SelectorMultipleDTO,indice:number){
    this.Seleccionador.push(elemento);
    this.NoSeleccionador.splice(indice,1);
  }
  deseleccionar(elemento:SelectorMultipleDTO,indice:number){
    this.NoSeleccionador.push(elemento);
    this.Seleccionador.splice(indice,1);
  }
  seleccionarTodo(){
    this.Seleccionador.push(...this.NoSeleccionador);
    this.NoSeleccionador.length=0;
  }
  deseleccionarTodo(){
    this.NoSeleccionador.push(...this.Seleccionador);
    this.Seleccionador.length=0;
  }
  
}
