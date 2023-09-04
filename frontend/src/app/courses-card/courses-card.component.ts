import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { InstructorService } from '../instructor/instructor.service';
import { DepartmentService } from '../department/department.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {
  courses: any[] = [];
  coursedata: any = {
    course_code: '',
    course_name: '',
    department_id: '',
    credits: '',
    description: '',
    instructor_id: ''
  };
  departments: any[] = [];
  instructors: any[] = [];
constructor(private courseservice:CourseService,private instructorservice:InstructorService,private deparmentservice:DepartmentService){}
  ngOnInit(): void {
    this.onload()
    this.onloaddepartment()
    this.onloadinstructor()
  }
  async submitForm() {
  try {
    
    await this.courseservice.createcourse(this.coursedata)
    // You can now work with the coursedata object, e.g., send it to your backend
    console.log(this.coursedata);
alert("course created")
this.onload()
    // Reset the form
    this.coursedata = {};
  } catch (error) {
    console.log(error)
    
  }
  }

  async onload(){
    try {
      const res= await this.courseservice.getcourse()
      this.courses=res.data.courses
      
    } catch (error) {
      console.log(error)
    }
  }
  async onloaddepartment(){
    try {
      const res= await this.deparmentservice.getdepartment()
      this.departments=res.data.departments
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  async onloadinstructor(){
    try {
      const res= await this.instructorservice.getinstructor()
      this.instructors=res.data.instructors

      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  editCourse(course:any){}
  async deleteCourse(id:any){
    try {
      const res= await this.courseservice.deletecourse(id)
      this.onload()
      alert("delete successfully")
    } catch (error) {
      alert("error while delete")
    }
  }
}
