import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  buscar:string="";
 // regresarA:string="";

  constructor(private _peliculasService:PeliculasService,
              private _router:ActivatedRoute) {

      this._router.params.subscribe(parametros=>{
        console.log(parametros)
        if(parametros['texto']){
          this.buscar=parametros['texto'];
          this.buscarPelicula();
        }
      }) 
   }

  ngOnInit() {
  }

  buscarPelicula()
  {
    console.log("buscar=>"+this.buscar);
  	if(this.buscar.length==0){
  		return;
  	}
    console.log("this_buscar=>"+this.buscar);
  	this._peliculasService.buscarPelicula(this.buscar).subscribe(
      data=>{
        
        console.log(data)});

  }

}
