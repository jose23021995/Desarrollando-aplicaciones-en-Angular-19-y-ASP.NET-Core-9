import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorCreacionDTO, ActorDTO } from './actores';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';
import { Observable } from 'rxjs';
import { IServicioCRUD } from '../compartidos/interfaces/IServicioCRUD';

@Injectable({
  providedIn: 'root'
})
export class ActoresService implements IServicioCRUD<ActorDTO,ActorCreacionDTO> {
  
  private http = inject(HttpClient);
  private urlBase = environment.apiUrl + '/actores';
  constructor() { }

  public crear(actor: ActorCreacionDTO){
    const formData = this.construirFormData(actor);
    console.log(formData);
    console.log(this.urlBase);
    return this.http.post(this.urlBase, formData);
  }

  public obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<ActorDTO[]>>{
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<ActorDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }

  private construirFormData(actor: ActorCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);

    // 2024-01-25T15:18:20
    formData.append('fechaNacimiento', actor.fechaNacimiento.toISOString().split('T')[0]);

    if (actor.foto){
      formData.append('foto', actor.foto);
    }

    return formData;
  }

  public obtenerPorId(id: number): Observable<ActorDTO>{
    return this.http.get<ActorDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, actor: ActorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this.http.put(`${this.urlBase}/${id}`, formData);
  }

  public borrar(id: number){
    console.log(`${this.urlBase}/${id}`);
    return this.http.delete(`${this.urlBase}/${id}`);
  }
  
}
