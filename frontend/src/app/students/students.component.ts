import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
data:any={}
message:any=''
loading=false
error=false
error_message=''
constructor( private studentservice:StudentsService,private auth:AuthService,private router:Router){}


ngOnInit(): void {
  if(!this.auth.isAuthenticated()){
   this.router.navigate(['/login']) 
  }
}
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
