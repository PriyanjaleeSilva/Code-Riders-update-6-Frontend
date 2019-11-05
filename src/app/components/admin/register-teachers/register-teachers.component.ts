import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { ValidateService } from '../../../services/validate.service';


import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-register-teachers',
  templateUrl: './register-teachers.component.html',
  styleUrls: ['./register-teachers.component.scss']
})
export class RegisterTeachersComponent implements OnInit {

  registerUserData = {};

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
