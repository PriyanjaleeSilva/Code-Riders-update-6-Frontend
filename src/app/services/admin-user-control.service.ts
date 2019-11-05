import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Teacher } from '../shared/teacher.model';
import { Course } from '../shared/course.model';
import { RegisteredUsers } from '../shared/registered-users.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUserControlService {

  readonly baseURL = 'http://localhost:3000/adminUserControl';

  selectedCourses: Teacher;
  courses: Teacher[];

  selectedenrollment: Course;
  enrollments: Course[];

  selecteduser: RegisteredUsers;
  users: RegisteredUsers[];

  constructor(private http : HttpClient) { }

  saveTeacher(data) {
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/adminUserControl', data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  getbyCourse() {
    return this.http.get(this.baseURL);
  }

  getstudentsList(course) {
    return this.http.get('http://localhost:3000/adminUserControl/' + course); 
  }

  deleteFile(_id: string) {
    return this.http.delete('http://localhost:3000/adminUserControl' + `/${_id}`);
  }

  deleteFileReg(username: string) {
    return this.http.delete('http://localhost:3000/users' + `/${username}`);
  }

  getRegisteredUserList(role){
    return this.http.get('http://localhost:3000/users/' + role); 
  }

  getCoursesofTeacher(teacher){
    return this.http.get('http://localhost:3000/adminUserControl/' + teacher);
  }

  
}
