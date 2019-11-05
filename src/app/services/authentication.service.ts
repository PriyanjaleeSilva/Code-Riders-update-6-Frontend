import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken: any;
  user: any;

  private _registerUrl = "http://localhost:3000/users/register";
  private _loginUrl = "http://localhost:3000/users/authenticate";
  private _student_dashboard_url = "http://localhost:3000/users/student_dashboard";
  
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

 

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  
  
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logoutUser(){
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');  
    this._router.navigate(['/login']);
  }
  
}
