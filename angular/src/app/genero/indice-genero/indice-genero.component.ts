import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-indice-genero',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './indice-genero.component.html',
  styleUrl: './indice-genero.component.css'
})
export class IndiceGeneroComponent {
  generosService= inject(GenerosService);
  estamosEnProduccion=environment.production;
  constructor(){
    this.generosService.obtenerTodos().subscribe(generos=>{
      console.log(generos);
    })
  }
}
