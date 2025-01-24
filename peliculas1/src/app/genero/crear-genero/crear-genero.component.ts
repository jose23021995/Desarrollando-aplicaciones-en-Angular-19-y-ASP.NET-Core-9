import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';


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
    nombre:['']
  });
  guardarCambios(){
    //.. guardar cambios
    //this.router.navigate(['/generos'])
    console.log(this.form.value);
  }
}
