import {RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { BuscaComponent } from './components/buscador/busca.component';
export const App_Routes: Routes = [
    { path: 'home', component: HomeComponent },
	{ path: 'pelicula/:id/:pag', component: PeliculaComponent },
	{ path: 'buscarPelicula/:texto', component: BuscadorComponent },
	{ path: 'buscaPelicula', component: BuscaComponent },
	{ path: '**', pathMatch:'full',redirectTo: 'home' }
] 

export const APP_ROUTING = RouterModule.forRoot(App_Routes);