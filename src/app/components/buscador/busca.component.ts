import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  buscar:string="";

  constructor(private _peliculasService:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula()
  {
    console.log("buscar=>"+this.buscar);
  	if(this.buscar.length==0){
  		return;
  	}
    console.log("this_buscar=>"+this.buscar);
  	this._peliculasService.buscarPelicula(this.buscar).subscribe(data=>console.log(data));

  }

}
