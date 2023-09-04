import { Component, OnInit } from '@angular/core';
import { InstructorService } from './instructor.service';
import { DepartmentService } from '../department/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  formData:any={}
  departments:any=[]
   constructor(private instructerservice:InstructorService, private deparmentservice:DepartmentService,private navigate:Router){}
ngOnInit(): void {
  this.onload()

}

async onload(){
  try {
    const res=await this.deparmentservice.getdepartment()
    this.departments=res.data.departments
  } catch (error) {
    console.log(error)
  }
}
   async submitForm(){

    console.log(this.formData)
      try {
     
   const res= await this.instructerservice.createinstructor(this.formData)
  console.log(res)
  alert(res.data.message)
  this.navigate.navigate(['instructor_deshboard'])
   } catch (error:any) {
    console.log(error)
    alert(error.response.data.message||"Something going wrong")
   }
  }
}
