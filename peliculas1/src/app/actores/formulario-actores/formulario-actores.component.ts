import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO,ActorDTO } from '../actores';
import { fechaNoPuedeSerFutura } from '../../compartidos/componentes/funciones/validaciones';

@Component
({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule, MatDatepickerModule ],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit{
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  private formBuilder = inject(FormBuilder);
  @Input() modelo?: ActorDTO;
  @Output() posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form=this.formBuilder.group({
    nombre:['',{
      validators:[Validators.required]
    }],
    fechaNacimiento:new FormControl<Date|null>(null,{validators:[Validators.required,fechaNoPuedeSerFutura()]})
  });
  obtenerErrorCampoNombre(){
    let campo = this.form.controls.nombre;
    if (campo.hasError('required')) {
      return "El campo nombre es requerido";
    }
    return "";
  }
  obtenerErrorFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;
    if (campo.hasError('required')) {
      return "El campo nombre es requerido";
    }
    if (campo.hasError('futuro')) {
      return campo.getError('futuro').mensaje;
    }
    return "";
  }
  guardarCambios(){
    if (!this.form.valid) {
      return;
    }
    const actor = this.form.value as ActorCreacionDTO;
    this.posteoFormulario.emit(actor);
  }
}