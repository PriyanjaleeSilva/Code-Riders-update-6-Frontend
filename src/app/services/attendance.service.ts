import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Course } from '../shared/course.model';
import {Attendance } from '../shared/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  selectedAttendance: Attendance;
  attendances: Attendance[];

  selectedCourse: Course;
  courses: Course[];
  
  readonly baseURL = 'http://localhost:3000/attendance_management'; //backend 

  constructor(private http : HttpClient) { }

  getCourseList() {
    return this.http.get(this.baseURL);
  }

  postAttendance(att : Attendance){
    return this.http.post(this.baseURL, att);
  }

  getAttendanceList() {
    return this.http.get(this.baseURL);
  }
  
}
