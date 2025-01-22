import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './genero/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'generos', component:IndiceGenerosComponent},
    {path:'generos/crear', component:CrearGeneroComponent},
    {path:'generos/crear', component:CrearGeneroComponent},
    {path:'actores', component:IndiceActoresComponent},
    {path:'actores/crear', component:CrearActorComponent},
    {path:'cines', component:IndiceCinesComponent},
    {path:'cines/crear', component:CrearCineComponent},
    {path:'peliculas/crear', component:CrearPeliculaComponent},


];
