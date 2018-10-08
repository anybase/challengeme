import { Component, OnInit, Input } from '@angular/core';
import {Post} from '@app/models'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  private _post: Post;

  get post(): Post {
    return this._post;
  }

  @Input()
  set post(value: Post) {
    this._post = value;
  }
  ngOnInit() {
  }

}
