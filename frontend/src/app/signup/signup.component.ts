import { Component, OnDestroy } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  username: any = '';
  password: string = '';
  repeat_password: string = '';
  email: string = '';
  password_mismatch = false;
  firstname: string = '';
  lastname: string = '';
  errormessage = '';
  loginsuccess = false;
  loginerror = false;
  loading = false;

  // Define a subscription to manage
  signupSubscription: Subscription | undefined;

  constructor(private registerservice: SignupService, private router: Router) { }

  ngOnDestroy() {
    // Unsubscribe from the subscription when the component is destroyed,
    if (this.signupSubscription) {
      this.signupSubscription.unsubscribe();
    }
  }

  async register() {
    if (this.repeat_password !== this.password) {
      this.password_mismatch = true;
      return;
    }

    try {
      this.loading = true;

      // Make the HTTP request using Axios and handle the response
      const response = await this.registerservice.register({
        username: this.username,
        password: this.password,
        email: this.email,
        first_name: this.firstname,
        last_name: this.lastname
      });

      // Handle successful registration here
      this.loginsuccess = true;
      this.loading = false;
      setTimeout(() => {
        this.router.navigate(['/login']);
        
      }, 1000);
    } catch (error) {
      // Handle registration error here
      this.loginsuccess = false;
      this.loading = false;
      this.loginerror = true;
      console.error(error);
    }
  }
}
