import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import { RegisteredUsers } from '../../../shared/registered-users.model';

@Component({
  selector: 'app-unregister-students',
  templateUrl: './unregister-students.component.html',
  styleUrls: ['./unregister-students.component.scss']
})
export class UnregisterStudentsComponent implements OnInit {

  user : '';
  userarray: any;
  

  constructor(private adminService: AdminUserControlService) { }

  ngOnInit() {
    this.getStudentsList();
  }

  getStudentsList() {
    this.adminService.getRegisteredUserList("Student").subscribe((res) => {
      this.adminService.users = res as RegisteredUsers[];
    });
  }

  onDeleteReg(_id: string) {
    if (confirm('Are you sure to unregister this student ?') == true) {
      this.adminService.deleteFileReg(_id).subscribe((res) => {
        this.getStudentsList();
        
      });
    }
  }

}
