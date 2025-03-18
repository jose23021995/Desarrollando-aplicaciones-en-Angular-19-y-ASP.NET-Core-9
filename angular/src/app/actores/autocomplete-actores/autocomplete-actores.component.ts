import { Component, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormControl} from "@angular/forms";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { MatTable, MatTableModule} from "@angular/material/table";
import { actorAutoCompleteDTO } from '../actores';
import { CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, FormsModule, MatIconModule, MatInputModule, MatTableModule,DragDropModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();
  actores: actorAutoCompleteDTO[] = [{
      id: 1,
      nombre: 'Tom Holland',
      personaje: "",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/220px-Tom_Holland_at_KCA_2022.jpg"
    },
    {
      id: 2,
      nombre: 'Jennifer Lopez',
      personaje: "",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/210120-D-WD757-1975_-_Jennifer_Lopez_at_the_US_Capitol_%2850860511978%29_%28cropped%29.jpg/220px-210120-D-WD757-1975_-_Jennifer_Lopez_at_the_US_Capitol_%2850860511978%29_%28cropped%29.jpg"
    },
    {
      id: 2,
      nombre: 'Johnny Depp',
      personaje: "",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/220px-Johnny_Depp_2020.jpg"
    },
  ];
  @Input({required:true})
  actoresSeleccionados:actorAutoCompleteDTO[]=[];
  columnasAMostrar=["imagen","nombre","personaje","accion"];
  @ViewChild(MatTable) table!:MatTable<actorAutoCompleteDTO>;
  actorSeleccionado(event:MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue("");
    if (this.table != undefined) {
      this.table.renderRows()
    }
    console.log(this.actoresSeleccionados);
  }
  eliminar(actor:actorAutoCompleteDTO){
    const indice= this.actoresSeleccionados.findIndex((a:actorAutoCompleteDTO)=> a.id === actor.id)
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

  dinalizarArrastre(event:CdkDragDrop<any[]>){

  }
  finalizarArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio= this.actoresSeleccionados.findIndex(actor => actor=== event.item.data);
    moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex)
    this.table.renderRows();
  }
}
