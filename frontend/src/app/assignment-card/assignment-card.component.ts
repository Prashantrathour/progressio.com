import { Component, OnInit } from '@angular/core';
import { AssignmentService } from './assignment.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CourseService } from '../courses-card/course.service';
import { DepartmentService } from '../department/department.service';
import { AnnouncementService } from '../announcement-card/announcement.service';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css']
})
export class AssignmentCardComponent implements OnInit {
  assignments: any[] = [];
  courses: any[] = [];
  modalOpen = false;
  asignments:any[]=[]
  departments:any[]=[]

  announcements:any[]=[]
  
  assignmentData = {
    title: '',
    instructor:'',
    description: '',
    due_date: '',
    course_id: ''
  };
  constructor(
    private department:DepartmentService,
    private assignmentService: AssignmentService,
    private courseService: CourseService,
    private sanitizer: DomSanitizer,
   private announcementservice:AnnouncementService
  ) { }

  ngOnInit(): void {
    this.loadAssignments();
    this.loadcourses();

  }
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }



   async createAssignment() {
  try {
    
    const res=await this.assignmentService.createAssignment({...this.assignmentData,isSubmitted: false,
      githublink: '',
      deployelink: '',
      showSubmissionForm: false})
    console.log(res)
      this.loadAssignments();
  } catch (error:any) {
    alert(error.response.data.error||"error")
  }
    
  }
  async loadAssignments(): Promise<void> {
    try {
      const response = await this.assignmentService.getAssignment();
      this.assignments = response.data.assignments;
      console.log(response.data)
       this.assignments.forEach((assignment) => {
    const selectedCourse = this.courses.find((course) => course.id === assignment.course_id);
    if (selectedCourse) {
      assignment.course = selectedCourse.course_name;
    }
  });
      // Initialize the edit mode for each assignment
      this.assignments.forEach((assignment) => {
        assignment.isEditing = false;
      });
    } catch (error) {
      console.error('Error loading assignments:', error);
    }
  }
  async loadcourses(): Promise<void> {
    try {
      const response = await this.courseService.getcourse()
      this.courses = response.data.courses;
      console.log(response.data)
    } catch (error) {
      console.error('Error loading assignments:', error);
    }
  }



  async deleteAssignment(id: any) {
    // Implement delete functionality here

     try {
      const res = await this.assignmentService.deleteAssignment(id)
       this.loadAssignments();
       console.log(res)
       alert("assigment deleted")

    } catch (error) {
      console.log(error)
    }
  }

  openEditModal(assignment: any) {
    
 
    assignment.isEditing = true;
  }

  async saveEditedAssignment(assignment: any) {
    console.log(assignment)
    try {
      const res = await this.assignmentService.updateAssignment(assignment, assignment.id)
       this.loadAssignments();
       console.log(res)

    } catch (error:any) {
      alert(error.response.data.error||"error")
      console.log(error)
    }



    // Implement the logic to save the edited assignment (e.g., make an API call)

    // After saving, toggle off the edit mode for the assignment
    assignment.isEditing = false;
  }

  cancelEdit(assignment: any) {
    // Toggle off the edit mode for the assignment without saving changes
    assignment.isEditing = false;
  }
  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

