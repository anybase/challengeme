import { Component, OnInit, Input } from '@angular/core';
import {Post} from '@app/models'
import { trigger,style,transition,animate,query as q,keyframes,stagger, animateChild } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss'],
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
     transition(':enter',  [
      style({ opacity:0 }),
      animate('1000ms ease-in-out', style({ opacity:1 }))
    ]),
  ])
 ]
})
export class ChallengeDetailComponent implements OnInit {
  private _posts: Post[];
  post: Post;
  get posts(): Post[] {
    return this._posts;
  }

  @Input()
  set posts(value: Post[]) {
    this._posts = value;
  }
  constructor() { }
  ngOnInit() {
    this.post = new Post();
  }
}
