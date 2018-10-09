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
     transition(':leave', [
      style({ opacity:1 }),
      animate('1000ms ease-in-out', style({ opacity:0 }))]),
  ])
 ]
})
export class ChallengeDetailComponent implements OnInit {
  name = 'Angular 6';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;
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
  submittedPost(submittedPost: Post){
  var newPostObj = {...submittedPost};
  submittedPost.content = "";
  this.posts.unshift(newPostObj);
  }
}
