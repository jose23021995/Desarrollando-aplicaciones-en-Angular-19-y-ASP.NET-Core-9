import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  imports: [MatButtonModule],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {
  router = inject(Router);
  guardarCambios(){
    //.. guardar cambios
    this.router.navigate(['/generos'])
  }
}
