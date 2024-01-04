import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{
  users!: User[];
  constructor(private UserService:UserService) {
  }
  ngOnInit() {
    this.UserService.GetUsers().subscribe(res=>{
      this.users=res;
    })
  }
}
