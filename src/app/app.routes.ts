import {RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
export const App_Routes: Routes = [
    { path: 'home', component: HomeComponent },
	{ path: 'peliculas', component: PeliculasComponent },
	{ path: 'pelicula/:id', component: PeliculaComponent },
	{ path: 'buscarPelicula/:texto', component: BuscadorComponent },
	{ path: '**', pathMatch:'full',redirectTo: 'home' }
] 

export const APP_ROUTING = RouterModule.forRoot(App_Routes);