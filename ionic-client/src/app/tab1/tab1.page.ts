import { Component } from '@angular/core';
import { UserModel } from '../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: any;

  constructor(public userService: UserService) {
    this.users = [];
    this.userService.getusers().subscribe(users => {
      this.users = users;
      })

  }
}
