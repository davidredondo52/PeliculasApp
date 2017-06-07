import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';
import { KeysPipe } from './pipes/keys.pipe';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    NavbarComponent,
    KeysPipe,
    BuscadorComponent,
    HomeComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
