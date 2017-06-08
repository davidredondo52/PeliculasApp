import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any,poster:boolean=false): any {
    let noimage="assets/img/noimage.png";
    let urlImg="http://image.tmdb.org/t/p/w300";
    if(poster)
    {
      urlImg="http://image.tmdb.org/t/p/w500";
    }
    console.log("pelicula.backdrop_path=>"+pelicula.backdrop_path+" pelicula.poster_path "+pelicula.poster_path)
    if(pelicula.backdrop_path)
    {
    	return urlImg+pelicula.backdrop_path;
    }
    else 
    {
    	if(pelicula.poster_path)
    	{
    		return urlImg+pelicula.poster_path;
    	}
    	else 
      {
    		return noimage;
    	}
    }
   
  }

}
