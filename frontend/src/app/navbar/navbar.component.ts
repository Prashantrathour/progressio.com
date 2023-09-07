import { Component, HostListener,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user=""
  constructor(private authService: AuthService,private router:Router) {}
  ngOnInit(): void {
   this.user=localStorage.getItem("user")||"user"
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  isAuthenticated_instructor(): boolean {
    return this.authService.isAuthenticated_instructor();
  }
 logout():void{
   this.authService.logout();
   this.router.navigate(['/login'])
 }
 logoutInstructor():void{
   this.authService.logout_instructor();
   this.router.navigate(['/login_instructor'])
 }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }



}
