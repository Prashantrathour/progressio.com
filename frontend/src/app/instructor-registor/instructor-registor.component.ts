import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InstructorService } from './instructor.service';


@Component({
  selector: 'app-instructor-registor',
  templateUrl: './instructor-registor.component.html',
  styleUrls: ['./instructor-registor.component.css']
})
export class InstructorRegistorComponent implements OnDestroy {

  password: string = '';

  email: string = '';
 
  username: string = '';
  gender: string = '';
  errormessage = '';
  loginsuccess = false;
  loginerror = false;
  loading = false;
  signupSubscription: Subscription | undefined;

  constructor(private registerservice:InstructorService, private router: Router) { }

  ngOnDestroy() {
    // Unsubscribe from the subscription when the component is destroyed,
    if (this.signupSubscription) {
      this.signupSubscription.unsubscribe();
    }
  }
  async register() {
  

    try {
      this.loading = true;

      // Make the HTTP request using Axios and handle the response
      const response = await this.registerservice.register({
        name: this.username,
        password: this.password,
        email: this.email,
        gender:this.gender
        
      });

      // Handle successful registration here
      this.loginsuccess = true;
      this.loading = false;
      setTimeout(() => {
        this.router.navigate(['/instructor_deshboard']);
        
      }, 1000);
    } catch (error:any) {
      // Handle registration error here
      this.loginsuccess = false;
      this.loading = false;
      this.loginerror = true;
      console.error(error);
      this.errormessage=error.response.data.error
    }
  }
}


