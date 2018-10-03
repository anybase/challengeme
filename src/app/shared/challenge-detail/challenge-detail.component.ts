import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';
import {PostComponent} from '../post/post.component'

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengeDetailComponent implements OnInit {
  name = 'Angular 6';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [];
  constructor() { }

  ngOnInit() {
    
      this.timeline = [
    { caption: '16 Jan', date: new Date(2014, 1, 16),selected: true, title: 'Horizontal Timeline', content: this.content },
    { caption: '17 Jan', date: new Date(2014, 1, 17), title: 'Horizontal Timeline', content: this.content },
    { caption: '17 Jan', date: new Date(2014, 1, 19), title: 'Horizontal Timeline', content: this.content },
    { caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Status#1', content: this.content }
    ];

  }

}
