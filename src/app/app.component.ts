import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



constructor(private _service:PeliculasService){
	this._service.getPopulares().subscribe(data=>console.log(data));
}



}