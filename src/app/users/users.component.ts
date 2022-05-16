import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {IUser} from '../Shared Classes and types/iUsers'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  users:IUser[] = []

  errorMessage:any;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(usersData=>
      {
        this.users=usersData;
      },error=>{
         this.errorMessage=error;
      })
  }

}
