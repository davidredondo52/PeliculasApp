import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

 pelicula:Pelicula;

 constructor(private activatedRoute:ActivatedRoute,
  			 private _service:PeliculasService) 
  {

  }

  ngOnInit() 
  {
  	this.activatedRoute.params.map(
  		parametros=>parametros['id']
  		).subscribe(id=>{

  			console.log("id"+id);

  			this._service.getPelicula(id).subscribe(
  				data=>{
            this.pelicula=data
                  console.log("data"+data);
                }

          );

  			
  		});
  	}

}
