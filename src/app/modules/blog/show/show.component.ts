import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  pageId = '/blog-show';
  postId: number;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
  }

  ngOnInit() {
    this.postService.getPost(this.postId)
      .subscribe(post => {
        this.post = post;
        console.log(post);
      });
  }
}
