import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';
import moment from 'moment';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  guardarCambios(actor:ActorCreacionDTO){
    actor.fechaNacimiento=moment(actor.fechaNacimiento).toDate();
    console.log('ceacion de actor:',actor);
  }
}
