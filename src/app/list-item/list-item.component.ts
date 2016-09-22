import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../hotels.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
 @Input() hotel;
  reviews = [];
  openReview = false;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }

  loadHotelReviews(){

  		this.hotelsService.loadHotelReviews(this.hotel.id)
		.subscribe(
			reviews => { 
			 	this.reviews = reviews;
			 	this.openReview = true;
			}
		);
  }

  hideReviews(){
  	this.openReview = false;
  }

}



