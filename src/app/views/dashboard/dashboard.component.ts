import { Component, OnInit } from '@angular/core';
import {Challenge} from '@app/models'
import { TimelineElement } from '@app/shared/horizontal-timeline/timeline-element';
@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
 challenges : Challenge[] = [];
 timeline: TimelineElement[] = [];

 content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;
  ngOnInit(): void {
    this.challenges = [
      { caption: '16 Jan', startDate: new Date(2014, 1, 16),selected: true, title: 'Horizontal Timeline', content: this.content, endDate: new Date(2014, 1, 16)  },
      { caption: '17 Jan', startDate: new Date(2014, 1, 17), title: 'Horizontal Timeline', content: this.content, endDate: new Date(2014, 1, 16)},
      { caption: '17 Jan', startDate: new Date(2014, 1, 19), title: 'Horizontal Timeline', content: this.content, endDate: new Date(2014, 1, 16) },
      { caption: '28 Feb', startDate: new Date(2014, 2, 28), title: 'Status#1', content: this.content, endDate: new Date(2014, 1, 16) },
      { caption: '28 Feb', startDate: new Date(2014, 2, 28), title: 'Status#1', content: this.content, endDate: new Date(2014, 1, 16) }
      ];
 
  }
  selectedItem(selectedItem: Challenge) {
    this.challenges.forEach(function (item: Challenge) {
      if (item.selected && item != selectedItem) {
        item.selected = false;
      }
    });
    selectedItem.selected = true;
    this.timeline = [
      { caption: selectedItem.caption, date: selectedItem.startDate ,selected: true, title: selectedItem.title, content: selectedItem.content },
      ];
  }
}
