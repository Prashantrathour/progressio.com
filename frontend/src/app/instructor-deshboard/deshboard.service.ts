import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { AssignmentService } from '../assignment-card/assignment.service';
import { DepartmentService } from '../department/department.service';
import { CourseService } from '../courses-card/course.service';
import { AnnouncementService } from '../announcement-card/announcement.service';

@Injectable({
  providedIn: 'root'
})
export class DeshboardService {
  asignments:any[]=[]
  departments:any[]=[]
  courses:any[]=[]
  announcements:any[]=[]
  constructor(private assignment:AssignmentService,private department:DepartmentService, private course:CourseService,announcementservice:AnnouncementService) { }


  async getstudents(): Promise<AxiosResponse>  {
    try {
      const response = await axios.get('https://progressiodeploye.onrender.com/students/');
      return response;
    } catch (error) {
      throw error;
    }
  }
}
