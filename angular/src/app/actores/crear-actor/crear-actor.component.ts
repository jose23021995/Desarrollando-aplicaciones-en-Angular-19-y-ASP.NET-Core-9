import { Component, inject } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';
import moment from 'moment';
import { Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { exportarErrores } from '../../compartidos/funciones/ExtraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent, MostrarErroresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  actoresService= inject(ActoresService);
  router= inject(Router);
  errores:string[]=[];

  guardarCambios(actor:ActorCreacionDTO){
    this.actoresService.crear(actor).subscribe(
      {
        next:()=>{
          this.router.navigate(['/actores']);
        },
        error:err=>{
          const errores=exportarErrores(err);
          this.errores=errores;
        }
      });
  }
}
