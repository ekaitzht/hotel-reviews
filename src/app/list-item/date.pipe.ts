import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'germandate',
  pure: false
})
export class DatePipe implements PipeTransform {

  transform(value) {
    	var splited = value.slice(0,10).split('-');
		var days = splited[0];
		var months = splited[1];
		var years = splited[2];
		return days+'.'+months+'.'+years;
  }

}
