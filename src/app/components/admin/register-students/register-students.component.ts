import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { ValidateService } from '../../../services/validate.service';


import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.scss']
})
export class RegisterStudentsComponent implements OnInit {

  registerUserData = {};
  role="Student";

  constructor(private _auth: AuthenticationService,
    private validate: ValidateService) { }

  ngOnInit() {
  }

  registerUser(){
    
    this._auth.registerUser(this.registerUserData)
       .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          },
          err => console.log(err)
       )
  }

}
