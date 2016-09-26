import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../hotels.service'
import { DatePipe } from './date.pipe'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']

})
export class ListItemComponent implements OnInit {
 @Input() hotel;
  reviews = [];
  openReview = false;
  range = [1,2,3,4,5];
  alreadyCalled = false;


  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }

  loadHotelReviews(){
  		if(!this.alreadyCalled){
  			this.hotelsService.loadHotelReviews(this.hotel.id)
			.subscribe(
				reviews => { 
				 	this.reviews = reviews;
				 	this.openReview = true;
				 	this.alreadyCalled = true;
				}
			);
  		} else{
  			this.openReview = true;
  		}
  		
  }

  hideReviews(){
  	this.openReview = false;
  }

}



