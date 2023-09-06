import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { DeshboardService } from './deshboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AnnouncementService } from '../announcement-card/announcement.service';
import { DepartmentService } from '../department/department.service';
import { AssignmentService } from '../assignment-card/assignment.service';
import { CourseService } from '../courses-card/course.service';

@Component({
  selector: 'app-instructor-deshboard',
  templateUrl: './instructor-deshboard.component.html',
  styleUrls: ['./instructor-deshboard.component.css']
})
export class InstructorDeshboardComponent implements OnInit {
students:any=[]
announcements:any[]=[]
courses:any[]=[]
departments:any[]=[]
assignments:any[]=[]
visibleStudentsCount=4
  constructor(private studentservice:DeshboardService,private router:Router,private authService:AuthService,
    private announcementservice:AnnouncementService,
    private department:DepartmentService,
    private assignmentService: AssignmentService,
    private courseService: CourseService,
    
    
    ){}

  loadMoreStudents() {
    // this.visibleStudentsCount += 4; // Increase the number of students to display by 4
    this.router.navigate(['instructor_deshboard/students']);
  }
  ngOnInit():void {

    this.loadannou()
    this.onload()
    this.loadassign()
    this.loaddepart()
    this.onloadcourses()
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


  async onloadcourses(){
    try {
      const res= await this.courseService.getcourse()
      this.courses=res.data.courses
      
    } catch (error) {
      console.log(error)
    }
    console.log(this.students)
  }

  async loaddepart(): Promise<void> {
    try {
      const response = await this.department.getdepartment()
      this.departments = response.data.departments;
  
    } catch (error) {
      console.error('Error loading departments:', error);
    }
  }
  async loadassign(): Promise<void> {
    try {
      const response = await this.assignmentService.getAssignment()
      this.assignments = response.data.assignments;
  
    } catch (error) {
      console.error('Error loading departments:', error);
    }
  }
  async loadannou(): Promise<void> {
    try {
      const response = await this.announcementservice.getannouncement()
      this.announcements = response.data.announcements;
      console.log(response.data)
    } catch (error) {
      console.error('Error loading assignments:', error);
    }
  }
}