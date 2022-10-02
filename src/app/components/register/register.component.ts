import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user= {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.user)
  }

}
