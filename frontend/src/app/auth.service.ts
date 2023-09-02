

// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }
  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the presence of a token in local storage.
    return !!localStorage.getItem('token');
  }
}

