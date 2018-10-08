import { Component, OnInit } from '@angular/core';
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
     transition(':enter', [
       style({ transform: 'scale(0.5)', opacity: 0 }),
       animate('0.5s cubic-bezier(.8,-0.6,0.2,1.5)', 
         style({ transform: 'scale(1)', opacity: 1 }))
     ]),
     transition(':leave', [
       style({ transform: 'scale(1)', opacity: 1, height: '*' }),
       animate('0.5s cubic-bezier(.8,-0.6,0.2,1.5)', 
         style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
     ]),      
   ])
 ]
})
export class ChallengeDetailComponent implements OnInit {
  name = 'Angular 6';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;
  post: Post;
  posts: Post[];
  constructor() { }

  ngOnInit() {
    this.post = new Post();
    this.posts = [
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()},
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()},
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()},
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()},
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()},
      {content : this.content, ownerAvatar : "", ownerId: 0, ownerName: "Giang", createdDate : new Date()}
    ];
  }
  submittedPost(submittedPost: Post){
  var newPostObj = {...submittedPost};
  submittedPost.content = "";
  this.posts.unshift(newPostObj);
  }
}
