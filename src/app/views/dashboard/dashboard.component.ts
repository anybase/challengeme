import { Component, OnInit } from '@angular/core';
import { Challenge, Post, DayItem,Timeline } from '@app/models'
import { trigger, style, transition, animate, query as q, keyframes, stagger, animateChild } from '@angular/animations';
import {ChallengeService, PostService} from '@app/services'
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
  timelines: Timeline[] =[]
  challenges: Challenge[] = [];
  posts: Post[] = [];
  selectedChallenge: Challenge;
  selectedDate: Date;
  activeTab = "Daily";
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;

  constructor (
    private challengeService: ChallengeService,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.runQueryChallenges();
    this.selectedChallenge = this.challenges[0];

  }
  
  runQueryChallenges() {

    this.challenges = [];
    this.challengeService.query()
    .subscribe(data => {
      this.challenges = data;
    });

  }
  runQueryPosts(challengeId: number, date: Date) {
    this.posts = [];
    this.postService.query(challengeId,this.activeTab == "Daily"? date: null)
    .subscribe(data => {
      this.posts = data;
    });
  }
  pushItem() {
    var challenge = {caption: '28 Feb', startDate: new Date(2014, 5, 28), title: 'Status#5', content: this.content, endDate: new Date(2014, 6, 16) }
    this.challengeService.save(challenge)
  }
  removeItem() {
    if(this.selectedChallenge != null){
      this.challengeService.destroy(this.selectedChallenge.id);
      this.selectedChallenge = null;
    }
  }
  selectedChallengeItem(selectedItem: Challenge) {
    this.selectedChallenge = selectedItem;
    this.challenges.forEach(function (item: Challenge) {
      if (item.selected && item != selectedItem) {
        item.selected = false;
      }
    });
    selectedItem.selected = true;
      this.runQueryPosts(this.selectedChallenge.id, this.selectedDate);
  }
  selectedDateItem(selectedItem: DayItem) {
    this.selectedDate = new Date(selectedItem.date);
    this.runQueryPosts(this.selectedChallenge.id, this.selectedDate);
  }
  submittedPost(submittedPost: Post){
    var newPostObj = {...submittedPost};
    submittedPost.content = "";
    newPostObj.challengeId = this.selectedChallenge.id;
    newPostObj.createdDate = this.selectedDate;
    newPostObj.month = this.selectedDate.toLocaleString("en-us", {month: "long"})
    this.postService.save(newPostObj);
    this.runQueryPosts(this.selectedChallenge.id, this.selectedDate);
    }
  onSelectTab(tab){
    this.activeTab = tab;
    this.runQueryPosts(this.selectedChallenge.id, this.selectedDate);
  }
}
