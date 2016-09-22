import { Component } from '@angular/core';
import { HotelsService } from './hotels.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HotelsService]
})
export class AppComponent {
	hotels = [];
	loadingHotels = false;
	errorApi = false;

    constructor(private hotelsService: HotelsService) {}

	loadHotels(){
		this.loadingHotels = true;
		this.errorApi = false;
		this.hotels = [];

		this.hotelsService.loadHotels()
		.subscribe(
			hotels => {
				this.hotels = hotels;
				this.loadingHotels = false;
		 	},
		 	error =>  {
		 		this.loadingHotels = false;
		 		this.errorApi = true;
		 	}
		);
	}
}

