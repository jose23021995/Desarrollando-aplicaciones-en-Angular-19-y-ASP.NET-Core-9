import { inject, Injectable } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http= inject(HttpClient); 
  private urlBase=environment.apiUrl+"/generos";
  private urlPruebas="https://localhost:7256/api/generos";
  constructor() {
    
   }
   public obtenerTodos(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>(this.urlPruebas);
  }
  public crear(genero:GeneroCreacionDTO){
    return this.http.post(this.urlPruebas, genero);
  }
}
