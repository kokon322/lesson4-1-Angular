import { Component, OnInit } from '@angular/core';
import {User} from '../../modules/user';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-user-of-post',
  templateUrl: './user-of-post.component.html',
  styleUrls: ['./user-of-post.component.css']
})
export class UserOfPostComponent implements OnInit {
  userOfPost: User;
  constructor(private activaterRoute: ActivatedRoute, private postService: PostService) {
        this.activaterRoute.params.subscribe(value => {
          this.postService.getUserByPostId(value.id).subscribe(value1 => {
            // @ts-ignore
            this.userOfPost = value1;
          });
        });
  }

  ngOnInit(): void {
  }

}
