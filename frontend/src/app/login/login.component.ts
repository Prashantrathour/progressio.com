import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username:string=''
    password:string=''
    errormessage=''
    loginsuccess=false
    loginerror=false
    loading=false
    constructor(private loginservice:LoginService , private router:Router){}
    async login(){
      try {
        this.loading=true
        const response=await this.loginservice.login({username:this.username,password:this.password})
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
