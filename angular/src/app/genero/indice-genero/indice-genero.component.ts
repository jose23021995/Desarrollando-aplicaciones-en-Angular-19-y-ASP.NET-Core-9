import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';
import { GeneroDTO } from '../generos';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-genero',
  imports: [RouterLink, MatButtonModule, ListadoGenericoComponent,MatTableModule],
  templateUrl: './indice-genero.component.html',
  styleUrl: './indice-genero.component.css'
})
export class IndiceGeneroComponent {

  generosService= inject(GenerosService);
  estamosEnProduccion=environment.production;
  generos!: GeneroDTO[];
  columnasAMostrar: string[] = ['id', 'nombre', 'acciones']; //columnas header 
  constructor(){
    this.generosService.obtenerTodos().subscribe(generos=>{
      console.log("listado de generos",generos);
      this.generos=generos;
    })
  }
}
