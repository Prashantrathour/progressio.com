import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorLoginService } from './instructor-login.service';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.css']
})
export class InstructorLoginComponent {
  email:string=''
    password:string=''
    errormessage=''
    loginsuccess=false
    loginerror=false
    loading=false
    constructor(private loginservice:InstructorLoginService , private router:Router){}
    async login(){
      try {
        this.loading=true
        const response=await this.loginservice.login({email:this.email,password:this.password})
        localStorage.removeItem('token');
        localStorage.setItem('instructor_token',response.data.token)
        this.loginsuccess=true
        this.loading=false
        setTimeout(() => {
          this.router.navigate(["/instructor_deshboard"])
          
        }, 1000);

      
      } catch (error:any) {
        this.loginsuccess=false
        this.loading=false
        this.loginerror=true
        console.log(error.response.data.error)

        this.errormessage=error.response.data.error|| "Login failed try again"
      }
    }

}
