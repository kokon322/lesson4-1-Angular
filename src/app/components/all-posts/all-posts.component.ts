import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../modules/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPost: Post[];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => {
      this.allPost = value;
    });
  }

  ngOnInit(): void {
  }

}
