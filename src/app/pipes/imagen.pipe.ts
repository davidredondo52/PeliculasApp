import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {



   transform(value: any[]): string {
  	let noimage="assets/img/noimage.png";
  	let urlImg="http://image.tmdb.org/t/p/w300";
  	if(!value){
  		return noimage;
  	}
  	console.log("value=>"+value[0]);
  	return (value.length>0)?urlImg+value:noimage;

	}
}
