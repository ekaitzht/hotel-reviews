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
    constructor(private hotelsService: HotelsService) {}

	loadHotels(){
		this.hotelsService.loadHotels()
		.subscribe(
			hotels => this.hotels = hotels

		
		);
	}
}

