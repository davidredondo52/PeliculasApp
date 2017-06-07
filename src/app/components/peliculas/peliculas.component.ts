import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {
peliculasPopulares:any []=[];
peliculasPopularesNinos:any []=[];

constructor(private _service:PeliculasService){
	this._service.getPopulares().subscribe(data=>{
	
		this.peliculasPopulares=data;
	});

}

  ngOnInit() {
  }

}
