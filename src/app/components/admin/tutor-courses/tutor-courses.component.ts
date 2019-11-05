import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Teacher } from '../../../shared/teacher.model';

@Component({
  selector: 'app-tutor-courses',
  templateUrl: './tutor-courses.component.html',
  styleUrls: ['./tutor-courses.component.scss']
})
export class TutorCoursesComponent implements OnInit {

  course : '';
  teacher : '';
  coursearray: any;
  teacherarray: any;

  private courses = [];

  constructor(private courseDetailsService: CourseDetailsService, private adminService: AdminUserControlService ) { }

  state = true;

  courseClick() {

    if(this.state != true){
    this.state=true;
    };
  }
  teacherClick() {
    if(this.state != false){
    this.state = false;
  }

  }

  ngOnInit() {
    this.getCourse();
    this.getTeacherName();
    this.refreshbyCourseList()
  }

  getCourse(){
    this.courseDetailsService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }
  

  getTeacherName(){
  this.adminService.getRegisteredUserList("Teacher")
.subscribe((res)=>{
  this.teacherarray = res;
  console.log(this.teacherarray);
});  }

Submit(){
  this.adminService.saveTeacher({course:this.course, teacher:this.teacher}).then((result)=>{
    console.log(result);
    alert('Saved successfully.');
    this.refreshbyCourseList();
    }, (err)=>{
      console.log(err);
      alert('An error occured. Please try again.');
   });
  
 }

 refreshbyCourseList() {
  this.adminService.getbyCourse().subscribe((res) => {
    this.adminService.courses = res as Teacher[];
  });
}


}
