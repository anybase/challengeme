import { Component, OnInit } from '@angular/core';
import { Challenge, Post, DayItem } from '@app/models'
import { trigger, style, transition, animate, query as q, keyframes, stagger, animateChild } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items',
          stagger(300, animateChild())
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

export class DashboardComponent implements OnInit {
  challenges: Challenge[] = [];
  posts: Post[] = [];
  list = [1, 2, 3, 4];
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;
  ngOnInit(): void {
    this.challenges = [
      { caption: '16 Jan', startDate: new Date(2014, 1, 16), selected: true, title: 'Status#1', content: this.content, endDate: new Date(2014, 1, 30) },
      { caption: '17 Jan', startDate: new Date(2014, 2, 17), title: 'Status#2', content: this.content, endDate: new Date(2014, 2, 22) },
      { caption: '17 Jan', startDate: new Date(2014, 3, 19), title: 'Status#3', content: this.content, endDate: new Date(2014, 4, 16) },
      { caption: '28 Feb', startDate: new Date(2014, 4, 28), title: 'Status#4', content: this.content, endDate: new Date(2014, 5, 16) },
      { caption: '28 Feb', startDate: new Date(2014, 5, 28), title: 'Status#5', content: this.content, endDate: new Date(2014, 6, 16) }
    ];
    this.posts = [];
    this.posts = [
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() }
    ];
  }
  pushItem() {
    this.challenges.push({ caption: '28 Feb', startDate: new Date(2014, 5, 28), title: 'Status#5', content: this.content, endDate: new Date(2014, 6, 16) });
  }
  removeItem() {
    this.challenges.pop();
  }
  selectedChallengeItem(selectedItem: Challenge) {
    this.challenges.forEach(function (item: Challenge) {
      if (item.selected && item != selectedItem) {
        item.selected = false;
      }
    });
    selectedItem.selected = true;
    console.log(selectedItem);
    this.posts = [];
    this.posts = [
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() }
    ];
  }
  selectedDateItem(selectedItem) {
    console.log(selectedItem);
    this.posts = [];
    this.posts = [
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() },
      { content: this.content, ownerAvatar: "", ownerId: 0, ownerName: "Giang", createdDate: new Date() }
    ];
  }

  scaleValue(topValue, leftValue, radiusValue, windowW, windowH) {

    var maxDistHor = (leftValue > windowW / 2) ? leftValue : (windowW - leftValue),
      maxDistVert = (topValue > windowH / 2) ? topValue : (windowH - topValue);
    return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radiusValue);
  }
}
