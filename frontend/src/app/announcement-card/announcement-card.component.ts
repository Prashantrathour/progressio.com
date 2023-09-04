import { Component,OnInit } from '@angular/core';
import { AnnouncementService } from './announcement.service';
import { CourseService } from '../courses-card/course.service';
import { DepartmentService } from '../department/department.service';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent implements OnInit {
announcement:any[]=[]
courses:any[]=[]
departments:any[]=[]
newAnnouncement:any={}
  constructor(  private announcementservice:AnnouncementService,private courseservice:CourseService,private deparmentservice:DepartmentService){}

  ngOnInit(): void {
    this.onload()
    this.onloadcourses()
    this.onloaddepartment()
  }
  async onloadcourses(){
    try {
      const res= await this.courseservice.getcourse()
      this.courses=res.data.courses
      
    } catch (error) {
      console.log(error)
    }
  }

  async createAnnouncement(){
    try {
      console.log(this.newAnnouncement)
      const res=await this.announcementservice.createannouncement(this.newAnnouncement)
      console.log(res)
      alert("announcement created")
      this.onload()
    } catch (error) {
      console.log(error)
      alert("error")
    }
  }
  async onloaddepartment(){
    try {
      const res= await this.deparmentservice.getdepartment()
      this.departments=res.data.departments
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  async onload(){
    try {
      const res= await this.announcementservice.getannouncement()
      this.announcement=res.data.announcements
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

}
