import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService} from '../../../services/enrollment.service';
import { WebSocketService} from '../../../services/web-socket.service';

import { Course } from '../../../shared/course.model';

//declare var M: any;

//import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-student-enrollments',
  templateUrl: './student-enrollments.component.html',
  styleUrls: ['./student-enrollments.component.scss'],
  
})
export class StudentEnrollmentsComponent implements OnInit {


  user = JSON.parse(localStorage.getItem("user")); 
  course : '';
  coursearray: any;
  
  

  constructor(private enrollmentService: CourseService, private coursegroupService: WebSocketService) { }

  ngOnInit() {
   this.groups();
  }


 Submit(){
  this.enrollmentService.saveEnrollments({course:this.course, username:this.user.username, fullname:this.user.name, email:this.user.email}).then((result)=>{
    console.log(result);
    }, (err)=>{
      console.log(err);
   });
 }

 groups(){
  this.coursegroupService.getchatgroups().then((data)=>{
    this.coursearray = data;
    console.log(this.coursearray);
  });
  }
  
  

}
