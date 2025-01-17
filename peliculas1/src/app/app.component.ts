import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto en angular 19';
  edad=29;
  pelcula={
    titulo:"spider man",
    fechaLanzamiento:new Date()
  }
  duplicarNumero(valor:number){
    return valor *valor;
  }
}
