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
                .map( res=> res.json().results);
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  getPelicula(id:string)
  {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
   
    return this.jsonp.get( url)
                .map( res=> res.json());
  }
getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  getCartelera()
  {
    let desde=new Date();
    let hasta=new Date();
    hasta.setDate(hasta.getDate()+7);
    let desdeStr=`${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr=`${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;
   
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
 
    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }
}
