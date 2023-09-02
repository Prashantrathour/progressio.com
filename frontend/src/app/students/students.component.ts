import { Component } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
data:any={}
message:any=''
loading=false
error=false
error_message=''
constructor( private studentservice:StudentsService){}
async create_student(){
  try {
    this.loading=true
    const res=await this.studentservice.create_student(this.data)
      console.log(res)
      this.loading=false
      this.message=res.data.message
  } catch (error:any) {
  
    this.loading=false
    this.error=true
    this.error_message=error.response.data.error
    console.log(error.response.data.error)
  }
}
}
