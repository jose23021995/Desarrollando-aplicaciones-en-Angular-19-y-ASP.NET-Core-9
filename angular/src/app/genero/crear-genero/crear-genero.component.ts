import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { exportarErrores } from '../../compartidos/componentes/funciones/ExtraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-genero',
  standalone:true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent, MostrarErroresComponent],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {
  private router = inject(Router);
  private generosService=inject(GenerosService);
  errores:string[]=[];
  guardarCambios(genero:GeneroCreacionDTO){
    this.generosService.crear(genero).subscribe({
      next:() =>{
        this.router.navigate(['/generos']);
      },
      error: err =>{
        const errores=exportarErrores(err);
        this.errores=errores;
      }
    });
  }
 

}
