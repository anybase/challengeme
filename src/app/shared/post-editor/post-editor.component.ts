import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post} from '@app/models'
import { NotificationService } from '@progress/kendo-angular-notification';
@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }
  private hideAfter: number = 2000;
  ngOnInit() {
    this.post = new Post();
  }
  post: Post

  @Output() submittedPost = new EventEmitter<Post>();

  onSubmitClick() {
    if (this.post.content == undefined || this.post.content.length <= 0) {
      this.notificationService.show({
        content: 'Input what you have done!!',
        animation: { type: 'fade', duration: 400 },
        position: { horizontal: 'right', vertical: 'top' },
        type: { style: 'error', icon: true },
        hideAfter: this.hideAfter
      });
      return;
    }
   this.post.ownerName = "Giang";
   this.post.createdDate = new Date();
   this.submittedPost.emit(this.post);
  }
}
