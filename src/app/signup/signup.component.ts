import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes and types/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  hears=["Facebook","Twitter", "Google"];
  userModel:User= new User("khouly","akhouly@gmail.com","Ak12345678","btryt","facebook");

  ngOnInit(): void {
  }


  SaveData(){
    if(this.userModel.password === this.userModel.password){
      
    }
  }

}
