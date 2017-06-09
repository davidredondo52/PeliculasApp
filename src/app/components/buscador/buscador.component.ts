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
   buscar:string="";
   constructor(private activatedRoute:ActivatedRoute,
  			       private _service:PeliculasService)  
   {

   }

  ngOnInit() 
  {
  	this.activatedRoute.params.subscribe(
  		parametros=>{
  		
       this.buscar=parametros['texto']; 			

  		 this._service.buscarPelicula(this.buscar).subscribe(
  				data=>{
  					this.peliculas=data
  					console.log(data);
  				});

  			
  		});
  }

}
