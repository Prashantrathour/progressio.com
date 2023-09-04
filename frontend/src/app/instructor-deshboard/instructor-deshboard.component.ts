import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { DeshboardService } from './deshboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-instructor-deshboard',
  templateUrl: './instructor-deshboard.component.html',
  styleUrls: ['./instructor-deshboard.component.css']
})
export class InstructorDeshboardComponent implements OnInit {
students:any=[]
visibleStudentsCount=4
  constructor(private studentservice:DeshboardService,private router:Router,private authService:AuthService){}

  loadMoreStudents() {
    // this.visibleStudentsCount += 4; // Increase the number of students to display by 4
    this.router.navigate(['instructor_deshboard/students']);
  }
  ngOnInit():void {
    if(!this.authService.isAuthenticated_instructor()){
      this.router.navigate(['/login_instructor'])
    }

  }
 async onload():Promise<void>{
    try {
          const res=await this.studentservice.getstudents()
    console.log(res)
    this.students=res.data.students
    } catch (error) {
      console.log(error)
    }
  }
}