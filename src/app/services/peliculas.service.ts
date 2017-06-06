import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PeliculasService {

	private apikey:string="b34437ffb23946e6990e148820884519";
	private  urlMoviedb:string="https://api.themoviedb.org/3"

   populares:any[]=[];
   constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPelicula(id:string)
  {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
   //let url2 ='https://api.themoviedb.org/3/movie/166426?api_key=b34437ffb23946e6990e148820884519&language=es&callback=JSONP_CALLBACK' ;

    return this.jsonp.get( url)
                .map( res=> res.json());
  }
getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
