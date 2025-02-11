import { Component, EventEmitter, inject, Input, input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, peliculaDTO } from '../peliculas';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule , InputImgComponent, MatDatepickerModule],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit{
  ngOnInit():void{
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }

  @Input()
  modelo?: peliculaDTO;
  @Output()
  posteoFormulario= new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder= inject(FormBuilder);
  form =this.formBuilder.group({
    titulo:['',{validators:[Validators.required]}],
    fechaLanzamiento: new FormControl<Date| null>(null,{validators:[Validators.required]}),
    trailer:'',
    poster:new FormControl<File|string|null>(null)
  });

  archivoSeleccionado(file:File){
    this.form.controls.poster.setValue(file)
  }
  guardarCambios(){
    if (!this.form.valid) {
      return;
    }
    const pelicula = this.form.value as PeliculaCreacionDTO;
    pelicula.fechaLanzamiento= moment(pelicula.fechaLanzamiento).toDate();
    this.posteoFormulario.emit(pelicula)
  }
  ObtenerErrorCampoTitulo():string{
    let campo= this.form.controls.titulo;

    if (campo.hasError("required")) {
      return "El campo nombre es requerido"
    }
    return "";
  }
  ObtenerErrorCampoFechaLanzamiento():string{
    let campo= this.form.controls.fechaLanzamiento;

    if (campo.hasError("required")) {
      return "El campo Fecha de Lanzamiento es requerido"
    }
    return "";
  }
}
