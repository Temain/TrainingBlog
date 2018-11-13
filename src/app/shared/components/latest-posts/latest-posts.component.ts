import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

}
