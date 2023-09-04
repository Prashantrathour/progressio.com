import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorComponent } from './instructor/instructor.component';
import { StudentsComponent } from './students/students.component';
import { InstructorRegistorComponent } from './instructor-registor/instructor-registor.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { InstructorDeshboardComponent } from './instructor-deshboard/instructor-deshboard.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AssignmentCardComponent } from './assignment-card/assignment-card.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    InstructorComponent,
    StudentsComponent,
    InstructorRegistorComponent,
    InstructorLoginComponent,
    InstructorDeshboardComponent,
    StudentCardComponent,
    AssignmentCardComponent,
    AnnouncementCardComponent,
    CoursesCardComponent,
    DepartmentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
