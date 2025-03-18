import { Injectable } from '@angular/core';
import { GeneroDTO } from './generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor() {
    
   }
   public obtenerTodos(): GeneroDTO[]{
    return [{id:1,nombre:"Drama"}]
  }
}
