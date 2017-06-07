import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string)
  {
  	console.log("Buscar pelicula "+texto);
  	this.router.navigate(["/buscarPelicula",texto]);
  }

}
