import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer proyecto en angular 19';
  edad=29;
  pelculas=[
    {
      titulo:"spider man",
      fechaLanzamiento:new Date(),
      precio:1400.99
    },
    {
      titulo:"venom",
      fechaLanzamiento:new Date(),
      precio:999
    },
    {
      titulo:"marvel",
      fechaLanzamiento:new Date(),
      precio:300.99
    },
    {
      titulo:"DC",
      fechaLanzamiento:new Date(),
      precio:300.99
    },
  ];
  duplicarNumero(valor:number){
    return valor *valor;
  }
}
