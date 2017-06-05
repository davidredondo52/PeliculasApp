import {RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
export const App_Routes: Routes = [
	{ path: 'peliculas', component: PeliculasComponent },
	{ path: 'pelicula/:id', component: PeliculaComponent },
	{ path: '**', pathMatch:'full',redirectTo: 'peliculas' }
] 

export const APP_ROUTING = RouterModule.forRoot(App_Routes);