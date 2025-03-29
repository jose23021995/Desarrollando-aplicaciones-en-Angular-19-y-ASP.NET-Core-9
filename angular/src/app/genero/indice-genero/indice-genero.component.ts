import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../generos';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-indice-genero',
  imports: [RouterLink, MatButtonModule, ListadoGenericoComponent,MatTableModule, MatPaginatorModule,SweetAlert2Module],
  templateUrl: './indice-genero.component.html',
  styleUrl: './indice-genero.component.css'
})

export class IndiceGeneroComponent {
  generosService= inject(GenerosService);
  generos!: GeneroDTO[];
  columnasAMostrar: string[] = ['id', 'nombre', 'acciones']; //columnas header 
  paginacion:PaginacionDTO={pagina:1,recordsPorPagina:5};
  cantidadTotalDeRegistros!:number;
  constructor(){
    this.cargarRegistros();
  }
  cargarRegistros(){
    this.generosService.obtenerPaginado(this.paginacion).subscribe((respuesta:HttpResponse<GeneroDTO[]>)=>{
      this.generos=respuesta.body as GeneroDTO[];
      const cabecera= respuesta.headers.get("cantidad-total-registros")as string;
      this.cantidadTotalDeRegistros= parseInt(cabecera,10);
    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion= {pagina:datos.pageIndex +1,recordsPorPagina:datos.pageSize};
    this.cargarRegistros();
  }
  borrar(id:number){
    this.generosService.borrar(id)
    .subscribe(()=> {
      this.paginacion.pagina=1;
      this.cargarRegistros();
    });
  }
}
