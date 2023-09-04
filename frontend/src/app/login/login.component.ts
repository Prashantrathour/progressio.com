import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email:string=''
    password:string=''
    errormessage=''
    loginsuccess=false
    loginerror=false
    loading=false
    constructor(private loginservice:LoginService , private router:Router){}
    async login(){
      try {
        this.loading=true
        const response=await this.loginservice.login({email:this.email,password:this.password})
        localStorage.removeItem('instructor_token');
        localStorage.setItem('token',response.data.token)
        this.loginsuccess=true
        this.loading=false
        setTimeout(() => {
          this.router.navigate(["/"])
          
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
