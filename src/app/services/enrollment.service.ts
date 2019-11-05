import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//import { Course } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  constructor(private http: HttpClient) { 
  
  }

  saveEnrollments(data) {
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/student_enrollments', data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  getStudentCoursesByusername(username) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/student_enrollments/' + username)
        //.map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentNamesBycoursename(course) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/student_enrollments/' + course)
        //.map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  

} 
