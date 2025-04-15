import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';
import { PeliculasService } from '../peliculas.service';
import { CineDTO } from '../../cine/cines';
import { Router } from '@angular/router';
import { exportarErrores } from '../../compartidos/funciones/ExtraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";

@Component({
    selector: 'app-editar-pelicula',
    imports: [FormularioPeliculasComponent, MostrarErroresComponent, CargandoComponent],
    templateUrl: './editar-pelicula.component.html',
    styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {

  ngOnInit(): void {
    this.peliculasService.actualizarGet(this.id).subscribe(modelo => {
      this.pelicula = modelo.pelicula;
      this.actoresSeleccionados = modelo.actores;

      this.cinesNoSeleccionados = modelo.cinesNoSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
        //devyelve los valores
      });
      console.log("this.cinesNoSeleccionados",this.cinesNoSeleccionados);

      this.cinesSeleccionados = modelo.cinesSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
      });
      console.log("this.cinesSeleccionados",this.cinesSeleccionados);
      
      this.generosNoSeleccionados = modelo.generosNoSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });
      console.log("this.generosNoSeleccionados",this.generosNoSeleccionados);

      this.generosSeleccionados = modelo.generosSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });
      console.log("this.generosSeleccionados",this.generosSeleccionados);
    });
  }

  @Input({ transform: numberAttribute })
  id!: number;
  pelicula!: PeliculaDTO;
  generosSeleccionados!: SelectorMultipleDTO[];
  generosNoSeleccionados!: SelectorMultipleDTO[];
  cinesSeleccionados!: SelectorMultipleDTO[];
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  actoresSeleccionados!: actorAutoCompleteDTO[];
  

  peliculasService = inject(PeliculasService);
  router = inject(Router);
  errores: string[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log("pelicula",pelicula);
    this.peliculasService.actualizar(this.id, pelicula).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        const errores = exportarErrores (err);
        this.errores = errores;
      }
    })
  }

}
