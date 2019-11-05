import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { NgForm } from '@angular/forms';
import { CourseDetails } from '../../../shared/course-details.model';

import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var M: any;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [ CourseDetailsService ]
})
export class CourseDetailsComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshcourseDetailsList();
    
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.courseDetailsService.postcourseDetails(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshcourseDetailsList();
      
      N.toast({ html: 'Saved successfully', classes: 'rounded '});
    });
    }
    else {
      this.courseDetailsService.putcourseDetails(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshcourseDetailsList();
        
        N.toast({ html: 'Updated successfully', classes: 'rounded '});
      });
    }
  }
  
  refreshcourseDetailsList() {
    this.courseDetailsService.getcourseDetailsFullList().subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

  


  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.courseDetailsService.selectedcourseDetails = {
      _id: "",
      course: "",
      duartion: "",
      regfee: "",
      totfee: "",
      insfee: "",
      dayandtime: "",
      sdate: "",
      edate: ""

    }
  
}

onEdit(cd : CourseDetails){
  this.courseDetailsService.selectedcourseDetails = cd;
}

}
