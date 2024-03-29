import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JavaComponent } from './components/webpages/java/java.component';
import { WebComponent } from './components/webpages/web/web.component';
import { GraphicComponent } from './components/webpages/graphic/graphic.component';
import { CComponent } from './components/webpages/c/c.component';
import { PhythonComponent } from './components/webpages/phython/phython.component';
import { LoginComponent } from './components/login/login.component';

import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { StudentEnrollmentsComponent } from './components/student/student-enrollments/student-enrollments.component';
import { PaymentComponent } from './components/student/payment/payment.component';
import { CheckoutComponent } from './components/student/checkout/checkout.component';
import { StudentNoticeComponent } from './components/student/student-notice/student-notice.component';

import { TutorDashboardComponent } from './components/tutor/tutor-dashboard/tutor-dashboard.component';
import { TutorNoticeComponent } from './components/tutor/tutor-notice/tutor-notice.component';
import { FilesJavaForBeginnersComponent } from './components/tutor/files-java-for-beginners/files-java-for-beginners.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CourseDetailsComponent } from './components/admin/course-details/course-details.component';
import { RegisterStudentsComponent } from './components/admin/register-students/register-students.component';
import { RegisterTeachersComponent } from './components/admin/register-teachers/register-teachers.component';
import { TutorCoursesComponent } from './components/admin/tutor-courses/tutor-courses.component';
import { CourseEnrollmentsComponent } from './components/admin/course-enrollments/course-enrollments.component';
import { UnregisterStudentsComponent } from './components/admin/unregister-students/unregister-students.component';
import { UnregisterTeachersComponent } from './components/admin/unregister-teachers/unregister-teachers.component';


import { ContactTutorPageComponent } from './components/contact-tutor-page/contact-tutor-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AttendanceManagementComponent } from './components/admin/attendance-management/attendance-management.component';
import { CourseComponent } from './components/student/course/course.component';
import { StudentChatComponent } from './components/student/student-chat/student-chat.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'java_web', component: JavaComponent },
  { path: 'web_web', component: WebComponent },
  { path: 'graphic_web', component: GraphicComponent },
  { path: 'c_web', component: CComponent },
  { path: 'phython_web', component: PhythonComponent },

  { path: 'login', component: LoginComponent },
  { path: 'student_dashboard', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'student_enrollments', component: StudentEnrollmentsComponent, canActivate: [AuthGuard]},
  { path: 'student_dashboard/:file_course', component: CourseComponent, canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'student_notice', component: StudentNoticeComponent },
  { path: 'Student_chat', component: StudentChatComponent},

  { path: 'tutor_dashboard', component: TutorDashboardComponent, canActivate: [AuthGuard] },
  { path: 'contact_tutor_page', component: ContactTutorPageComponent },
  { path: 'add_notice', component: TutorNoticeComponent },
  { path: 'tutor_dashboard/:file_course', component: FilesJavaForBeginnersComponent },

  { path: 'admin_dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'attendance_management', component: AttendanceManagementComponent, canActivate: [AuthGuard]},
  { path: 'course_details', component: CourseDetailsComponent, canActivate: [AuthGuard]},
  { path: 'register_students', component: RegisterStudentsComponent },
  { path: 'register_teachers', component: RegisterTeachersComponent },
  { path: 'tutor_courses', component: TutorCoursesComponent },
  { path: 'course_enrollments', component: CourseEnrollmentsComponent },
  { path: 'unregister_students', component: UnregisterStudentsComponent },
  { path: 'unregister_teachers', component: UnregisterTeachersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
