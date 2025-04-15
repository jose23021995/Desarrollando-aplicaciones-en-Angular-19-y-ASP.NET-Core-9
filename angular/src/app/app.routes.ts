import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGeneroComponent } from './genero/indice-genero/indice-genero.component';
import { CrearGenerosComponent } from './genero/crear-genero/crear-genero.component';
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
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';

//Rutas existentes
export const routes: Routes = [
    //todo
    {path:'', component:LandingPageComponent},
    //vistas normales
    {path:'generos', component:IndiceGeneroComponent},
    //vistas normales
    {path:'generos/crear', component:CrearGenerosComponent},
    //vistas con parametros
    {path:'generos/editar/:id',component:EditarGeneroComponent},
    //vistas normales
    {path:'actores', component:IndiceActoresComponent},
    //vistas con parametros
    {path:'actores/editar/:id',component:EditarActorComponent},
    //vistas normales
    {path:'actores/crear', component:CrearActorComponent},
    //vistas normales
    {path:'cines', component:IndiceCinesComponent},
    //vistas con parametros
    {path:'cines/editar/:id',component:EditarCineComponent},
    //vistas normales
    {path:'cines/crear', component:CrearCineComponent},
    //vistas normales
    {path:'peliculas/crear', component:CrearPeliculaComponent},
    //vistas con parametros
    {path:'peliculas/editar/:id', component:EditarPeliculaComponent},
    //vistas normales
    {path:'peliculas/filtrar', component:FiltroPeliculasComponent},
    //en caso de errores
    {path: 'pelicula/:id', component: DetallePeliculaComponent},

    {path:'**', redirectTo:''   },
];
