import { Component, HostListener,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
   
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  isAuthenticated_instructor(): boolean {
    return this.authService.isAuthenticated_instructor();
  }
 logout():void{
   this.authService.logout();
 }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }



}
