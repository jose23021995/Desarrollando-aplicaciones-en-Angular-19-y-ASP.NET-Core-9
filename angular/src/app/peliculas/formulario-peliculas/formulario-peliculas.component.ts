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
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { SelectorMultiplesComponent } from "../../compartidos/componentes/selector-multiples/selector-multiples.component";
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule, InputImgComponent, MatDatepickerModule, SelectorMultiplesComponent, AutocompleteActoresComponent],
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
  generosSeleccionados!: SelectorMultipleDTO[];
  @Input()
  generosNoSeleccionados!: SelectorMultipleDTO[];
  @Input()
  cinesSeleccionados!: SelectorMultipleDTO[];
  @Input()
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  @Input()
  modelo?: peliculaDTO;
  @Input({required:true})
  actoresSeleccionados!:actorAutoCompleteDTO[];

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
  guardarCambios(){
    if (!this.form.valid) {
      return;
    }
    const pelicula = this.form.value as PeliculaCreacionDTO;
    const generoIds = this.generosNoSeleccionados.map(val => val.llave);
    const cinesIds = this.generosNoSeleccionados.map(val => val.llave);
    pelicula.fechaLanzamiento= moment(pelicula.fechaLanzamiento).toDate();
    pelicula.cinesIds=cinesIds;
    pelicula.actores=this.actoresSeleccionados;
    this.posteoFormulario.emit(pelicula)
  }
}
