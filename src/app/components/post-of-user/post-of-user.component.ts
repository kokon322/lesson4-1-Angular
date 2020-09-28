import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Post} from '../../modules/post';

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent implements OnInit {
  postOfUser: Post;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getPostByUserId(value.id).subscribe(post => {
        this.postOfUser = post;
      });
    });
  }

  ngOnInit(): void {
  }

}
