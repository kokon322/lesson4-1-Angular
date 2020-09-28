import { Component, OnInit } from '@angular/core';
import {User} from '../../modules/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  allUser: User[];
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.allUser = value;
    });
  }

  ngOnInit(): void {
  }

}
