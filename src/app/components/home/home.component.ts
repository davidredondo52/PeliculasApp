import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesNinos:any;
  constructor( private _service:PeliculasService) 
  {
      this._service.getCartelera().subscribe(data=>this.cartelera=data);

      this._service.getPopulares().subscribe(data=>this.populares=data);

      this._service.getPopularesNinos().subscribe(data=> this.popularesNinos=data);
  }

  ngOnInit() {
  }

}
