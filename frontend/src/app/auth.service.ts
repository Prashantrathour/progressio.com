

// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) { }
  isAuthenticated(): boolean {
   
    // Check if the user is authenticated based on the presence of a token in local storage.
    return !!localStorage.getItem('token');
  }
  isAuthenticated_instructor(): boolean {
    
    // Check if the user is authenticated based on the presence of a token in local storage.
    return !!localStorage.getItem('instructor_token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  logout_instructor(){
    localStorage.removeItem('instructor_token');
    this.router.navigate(['/instructor_login']);
  }
}

