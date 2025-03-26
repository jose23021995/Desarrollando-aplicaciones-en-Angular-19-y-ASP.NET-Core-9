import { inject, Injectable } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from './generos';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../compartidos/componentes/modelos/PaginacionDTO';
import { construirQueryParams } from '../../app/compartidos/funciones/construirQueryParams';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http= inject(HttpClient); 
  private urlBase=environment.apiUrl+"/generos";
  constructor() {
    
   }
   public obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<GeneroDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }
   public obtenerTodos(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>(this.urlBase);
  }
  public crear(genero:GeneroCreacionDTO){
    return this.http.post(this.urlBase, genero);
  }
}
