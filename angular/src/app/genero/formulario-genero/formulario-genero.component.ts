import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  imports:  [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit{

  @Input() modelo?:GeneroDTO;
  @Output() posteoFormulario =new EventEmitter<GeneroCreacionDTO>();
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
    private formBuilder = inject(FormBuilder);
  
  form= this.formBuilder.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula(),Validators.maxLength(75)]}]
  });
  obtenerErrorCampoNombre(){
    let nombre =this.form.controls.nombre;
    if (nombre.hasError("required")) {
      return "El campo nombre es requerido";
    }
    if (nombre.hasError("maxLength")) {
      return `El campo nombre no puede tener más de ${nombre.getError('maxLength').requiredLength} caracteres`;
    }
    if (nombre.hasError("primeraLetraMayuscula")) {
      return nombre.getError("primeraLetraMayuscula").mensaje;
    }
    return "";
  }
  guardarCambios(){
    //.. guardar cambios
    //this.router.navigate(['/generos'])
    if (!this.form.valid) {
      return;
    }
    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
