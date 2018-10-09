import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DayItem} from '@app/models'
import * as moment from 'moment'; // add this 1 of 4
import { trigger,style,transition,animate,query as q,keyframes,stagger, animateChild } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

@Component({
  selector: 'app-calendar-slider',
  templateUrl: './calendar-slider.component.html',
  styleUrls: ['./calendar-slider.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
     transition(':enter', [
       // child animation selector + stagger
       query('@items', 
         stagger(0, animateChild())
       )
     ]),
   ]),
   trigger('items', [
     // cubic-bezier for a tiny bouncing feel
     transition(':enter', [
       style({ transform: 'scale(0.5)', opacity: 0 }),
       animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
         style({ transform: 'scale(1)', opacity: 1 }))
     ]),
     transition(':leave', [
       style({ transform: 'scale(1)', opacity: 1, height: '*' }),
       animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
         style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
     ]),      
   ])
 ]
})
export class CalendarSliderComponent implements OnInit {
  stagger = true;
  dates: DayItem[]  = [];
  slideDirection = 'left';
  selectedDate = moment().startOf('day').format();
  weekOfYear: any;
  constructor() { }
  radioSelected:any;
  ngOnInit() {
    this._changeDisplayedWeek(0);
  }
  @Output() selectedItem: EventEmitter<DayItem>  = new EventEmitter();

  selectDate(date: DayItem) {
   this.selectedDate = date.date;
   this.selectedItem.emit(date);
  };

  nextWeek = function () {
    debugger;
    this.slideDirection = 'left';
    this._changeDisplayedWeek(7);
  };

  prevWeek = function () {
    this.slideDirection = 'right';
    this._changeDisplayedWeek(-7);
  };
   _changeDisplayedWeek(daysToAdd) {
    var selectedDate = moment(this.selectedDate).add(daysToAdd, 'days');
    this.selectedDate = selectedDate.format();
    this.weekOfYear = selectedDate.format('WW');
    this.dates = this._expandWeek(selectedDate);
    
    this.selectedItem.emit({
      weekDay: selectedDate.format('dd'),
      shortDate: selectedDate.format('DD.MM'),
      date: selectedDate.format(),
      selected : false,
      status : 1
    });

  }

   _expandWeek(startDate) {
    var dates : DayItem[]  = [];
    var dayOfWeek = moment(startDate).startOf('week');
    for (var i = 0; i < 7; i++) {
      dates.push({
        weekDay: dayOfWeek.format('dd'),
        shortDate: dayOfWeek.format('DD.MM'),
        date: dayOfWeek.format(),
        selected : false,
        status : 1
      });
      dayOfWeek.add(1, 'd');
    }

    return dates;
  }
}
