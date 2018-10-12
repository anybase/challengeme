import { Injectable } from '@angular/core';
import { Challenge, Post, DayItem,Timeline } from '@app/models'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChallengeService {
  timelines: Timeline[] =[]
  challenges: Challenge[] = [];
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;
  constructor() {
    this.challenges = [
      { id: 1, caption: '16 Jan', startDate: new Date(2014, 1, 16), selected: true, title: 'Status#1', content: this.content, endDate: new Date(2014, 1, 30) },
      { id: 2,caption: '17 Jan', startDate: new Date(2014, 2, 17), title: 'Status#2', content: this.content, endDate: new Date(2014, 2, 22) },
      { id: 3,caption: '17 Jan', startDate: new Date(2014, 3, 19), title: 'Status#3', content: this.content, endDate: new Date(2014, 4, 16) },
      { id: 4,caption: '28 Feb', startDate: new Date(2014, 4, 28), title: 'Status#4', content: this.content, endDate: new Date(2014, 5, 16) },
      { id: 5,caption: '28 Feb', startDate: new Date(2014, 5, 28), title: 'Status#5', content: this.content, endDate: new Date(2014, 6, 16) }
    ];
   
    this.timelines = [];
    var timeline = {
      month: "Oct",
      posts: [{day: "1", content: this.content},
      {day: "2", content: this.content},
      {day: "3", content: this.content},
      {day: "4", content: this.content}
      ]
    }
    this.timelines.push(timeline);
   }
  ngOnInit(){
    
  }
  query(): Observable<Challenge[]> {
    return Observable.of(this.challenges)
  }
  get(id): Observable<Challenge> {
    var challenge  = this.challenges.find(x=> x.id == id);
    return Observable.of(challenge);
  }
  destroy(id) {
    return this.challenges.splice(this.challenges.findIndex(function(i){
      return i.id === id;
  }), 1);
  }
  save(challenge): Observable<Challenge> {
    // If we're updating an existing challenge
    if (challenge.id) {
      this.challenges.push(challenge)
      return challenge;
    // Otherwise, create a new challenge
    } else {
      var x = Math.max.apply(Math, this.challenges.map(function(o) { return o.id; }))
      challenge.id = x +1;
      challenge.title = "Status#"+ challenge.id;
      this.challenges.push(challenge)
      return challenge;
    }
  }
}
