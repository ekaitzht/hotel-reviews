import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelsService {
	readonly endpoint = 'http://fake-hotel-api.herokuapp.com/api/hotels';
	readonly endpointReviews = 'http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id='

	readonly minStars = '?min_stars='+5;

  	constructor(private http: Http) { 

  	}

    loadHotels(){
		return this.http.get(this.endpoint+this.minStars)
		.map(response =>  response.json())
  	}

  	loadHotelReviews(id){
		return this.http.get(this.endpointReviews+id)
		.map(response =>  response.json())
  	}

}
