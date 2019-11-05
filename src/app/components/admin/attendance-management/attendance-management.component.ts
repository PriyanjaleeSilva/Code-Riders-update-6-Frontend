import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../services/attendance.service';
import { Course } from '../../../shared/course.model';
import { Attendance } from '../../../shared/attendance.model';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss'],
  providers: [ AttendanceService ]
})
export class AttendanceManagementComponent implements OnInit {

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
      this.refreshAttendanceList();

 
     
  }

  refreshAttendanceList() {
    this.attendanceService.getAttendanceList().subscribe((res) => {
      this.attendanceService.attendances = res as Attendance[];
    });
  }


}
