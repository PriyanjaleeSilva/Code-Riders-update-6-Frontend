import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Course } from '../../../shared/course.model';

@Component({
  selector: 'app-course-enrollments',
  templateUrl: './course-enrollments.component.html',
  styleUrls: ['./course-enrollments.component.scss']
})
export class CourseEnrollmentsComponent implements OnInit {

  course : '';
  coursearray: any;

  constructor(private courseDetailsService: CourseDetailsService, private adminService: AdminUserControlService) { }

  ngOnInit() {
    this.getCourse();
    this.refreshStudentsList();
  }

  getCourse(){
    this.courseDetailsService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }

refreshStudentsList() {
  this.adminService.getstudentsList(this.course).subscribe((res) => {
    this.adminService.enrollments = res as Course[];
  });
}

Submit(){
  
    this.refreshStudentsList();
  
 }

 onDelete(_id: string) {
  if (confirm('Are you sure to unenroll this student ?') == true) {
    this.adminService.deleteFile(_id).subscribe((res) => {
      this.refreshStudentsList();
      N.toast({ html: 'Unenrolled successfully', classes: 'rounded' });
    });
  }
}



}
