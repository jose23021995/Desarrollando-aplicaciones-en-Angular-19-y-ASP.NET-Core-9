import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGeneroComponent } from './genero/indice-genero/indice-genero.component';
import { CrearGeneroComponent } from './genero/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './genero/editar-genero/editar-genero.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cine/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'generos', component:IndiceGeneroComponent},
    {path:'generos/crear', component:CrearGeneroComponent},
    {path:'generos/editar/:id',component:EditarGeneroComponent},
    {path:'actores', component:IndiceActoresComponent},
    {path:'actores/editar/:id',component:EditarActorComponent},
    {path:'actores/crear', component:CrearActorComponent},
    {path:'cines', component:IndiceCinesComponent},
    {path:'cines/editar/:id',component:EditarCineComponent},
    {path:'cines/crear', component:CrearCineComponent},
    {path:'peliculas/crear', component:CrearPeliculaComponent},
    {path:'peliculas/editar/:id', component:EditarPeliculaComponent},
    {path:'peliculas/filtrar', component:FiltroPeliculasComponent},
    {path:'**', redirectTo:''   },


];
