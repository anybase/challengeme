import { Injectable } from '@angular/core';
import { Post, Timeline } from '@app/models'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostService {
  posts: Post[] = [];
  timelines: Timeline[] =[]
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;
  constructor() {
    this.posts = [];
    this.posts = [
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  1 ),
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  2 ),
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  3 ),
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  4 ),
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  5 ),
      new Post(1, this.content,  "",  0,  "Giang",  new Date(),  6 )
    ];
   }
   ngOnInit(){
    
  }
  query(id: number, date: Date): Observable<Post[]> {
    if(date != null){
      return Observable.of(this.posts.filter(x=> x.challengeId == id && x.createdDate.getDate() == date.getDate()));
    }
    return Observable.of(this.posts.filter(x=> x.challengeId == id));
  }
  get(id): Observable<Post> {
    var post  = this.posts.find(x=> x.id == id);
    return Observable.of(post);
  }
  destroy(id) {
    return this.posts.splice(this.posts.findIndex(function(i){
      return i.id === id;
  }), 1);
  }
  save(post): Observable<Post> {
    // If we're updating an existing challenge
    if (post.id) {
      this.posts.push(post)
      return post;
    // Otherwise, create a new challenge
    } else {
      var x = Math.max.apply(Math, this.posts.map(function(o) { return o.id; }))
      post.id = x +1;
      post.title = "Status#"+ post.id;
      this.posts.unshift(post)
      return post;
    }
  }
}
