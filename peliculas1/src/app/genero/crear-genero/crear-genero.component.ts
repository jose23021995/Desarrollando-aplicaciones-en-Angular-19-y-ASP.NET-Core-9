import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';


@Component({
  selector: 'app-crear-genero',
  standalone:true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  form= this.formBuilder.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula()]}]
  });
  obtenerErrorCampoNombre(){
    let nombre =this.form.controls.nombre;
    if (nombre.hasError("required")) {
      return "El campo nombre es requerido";
    }
    if (nombre.hasError("primeraLetraMayuscula")) {
      return nombre.getError("primeraLetraMayuscula").mensaje;
    }
    return "";
  }
  guardarCambios(){
    //.. guardar cambios
    //this.router.navigate(['/generos'])
    console.log(this.form.value);
  }
}
