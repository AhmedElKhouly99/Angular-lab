import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes and types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel:User= new User("khouly","akhouly@gmail.com","Ak12345678","btryt","facebook");

  ngOnInit(): void {
  }

  SaveData(){
    
  }

}
