import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

   peliculas:any []=[];
   constructor(private activatedRoute:ActivatedRoute,
  			   private _service:PeliculasService)  { }

  ngOnInit() {
  	this.activatedRoute.params.map(
  		parametros=>parametros['texto']
  		).subscribe(texto=>{

  			console.log("id"+texto);

  			this._service.buscarPelicula(texto).subscribe(
  				data=>{
  					this.peliculas=data.results
  					console.log(data);
  				});

  			
  		});
  }

}
