import { Component, OnInit } from '@angular/core';
import { Credentials} from '../credentials'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Credentials = {userName: '', password: ''};
  status: string;
  constructor() { }

  ngOnInit() {
  }
  validate(){
    if(this.user.userName === 'blah' && this.user.password === 'blah')
    {
      this.status = 'valid user';
    } else{
      this.status = 'invalid user';
    }
  }
}
