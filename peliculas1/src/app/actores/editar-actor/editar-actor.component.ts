import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
@Input(  {transform:numberAttribute})
  id!:number;
  actor:ActorDTO ={id:1, nombre:"Tom Holland",fechaNacimiento:new Date(1991,0,25),foto:"https://i.blogs.es/79c889/-2-the-legend-of-zelda-breath-of-the-wild---nintendo-switch-presentation-2017-trailer---youtube---0-2-26/375_375.jpeg"};
  guardarCambios(actor:ActorCreacionDTO){
    console.log("actor",actor);

    console.log('editando actor:',actor);
  }
}
