import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { InstructorComponent } from './instructor/instructor.component';
import { StudentsComponent } from './students/students.component';
import { InstructorRegistorComponent } from './instructor-registor/instructor-registor.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { InstructorDeshboardComponent } from './instructor-deshboard/instructor-deshboard.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { AssignmentCardComponent } from './assignment-card/assignment-card.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AbouteComponent},
  {path:"contact",component:ContactComponent},
  {path:"register",component:SignupComponent},
  {path:"create_student",component:StudentsComponent},
  {path:"create_instructor",component:InstructorComponent},
  {path:"register_instructor",component:InstructorRegistorComponent},
  {path:"login_instructor",component:InstructorLoginComponent},
  {path:"instructor_deshboard",component:InstructorDeshboardComponent},
  {
    path: 'instructor_deshboard',
    children: [
      { path: 'students', component: StudentCardComponent },
      { path: 'courses', component: CoursesCardComponent },
      { path: 'assignments', component: AssignmentCardComponent },
      { path: 'announcements', component: AnnouncementCardComponent },
      // Add more routes for other dashboard components here
      { path: '', redirectTo: 'students', pathMatch: 'full' }, // Default route
    ],
  },
  {path:"student_deshboard",component:StudentDashboardComponent},
  {
    path:'student_deshboard',
    children:[
      {path:'profile',component:ProfileComponent},
    ]
  },
  {path:"student_deshboard",component:StudentDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
