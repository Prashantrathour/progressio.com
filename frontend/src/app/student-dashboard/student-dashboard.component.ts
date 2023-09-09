import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AxiosPromise } from 'axios';
import { StudentService } from '../student-card/student.service';
import { InstructorService } from '../instructor/instructor.service';
import { DeshboardService } from '../instructor-deshboard/deshboard.service';
import { CourseService } from '../courses-card/course.service';
import { StudentDeshboardService } from './student-deshboard.service';
import { AnnouncementService } from '../announcement-card/announcement.service';
import { AssignmentService } from '../assignment-card/assignment.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class StudentDashboardComponent implements OnInit {
  student: any = {};
  course_id: any = {};
  courses: any = [];
  enrollments: any = [];
  announcement: any = [];
  user = '';
  assignments: any[] = [];
  assignmentName: string = 'Sample Assignment';
  dueDate: string = '2023-09-30'; // Replace with the actual due date
  isSubmitted: boolean = false;
  githubLink: string = '';
  deployLink: string = '';
  activeTab: string = 'dashboard'; // Set the default active tab to 'profile'
  isLoading: boolean = false; // Add isLoading property

  constructor(
    private studentservice: DeshboardService,
    private course: CourseService,
    private studentdeshboardservice: StudentDeshboardService,
    private announcements: AnnouncementService,
    private assignmentservice: AssignmentService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user') || '';
    this.loadData();
  }

  async loadData() {
    this.isLoading = true; // Set isLoading to true when data loading starts

    try {
      await this.loadStudent();
      await this.loadCourses();
      await this.loadEnrollments();
      await this.loadAnnouncements();
      await this.loadAssignments();
      this.checkSubmissionStatus();
    } catch (error) {
      console.error(error);
      // Handle error as needed
    } finally {
      this.isLoading = false; // Set isLoading to false when data loading is complete
    }
  }

  async loadStudent() {
    try {
      const res = await this.studentservice.getstudents();
      const students = res.data.students;
      this.student = students.find((i: any) => i.user == this.user);
    } catch (error) {
      console.error(error);
    }
  }

  async loadCourses() {
    try {
      const res = await this.course.getcourse();
      this.courses = res.data.courses;
    } catch (error) {
      console.error(error);
    }
  }

  async loadEnrollments() {
    try {
      const res = await this.studentdeshboardservice.getenrollments();
      this.enrollments = res.data.enrollments;
    } catch (error) {
      console.error(error);
    }
  }

  async loadAnnouncements() {
    try {
      const res = await this.announcements.getannouncement();
      this.announcement = res.data.announcements;
    } catch (error) {
      console.error(error);
    }
  }

  async loadAssignments() {
    try {
      const res = await this.assignmentservice.getAssignment();
      this.assignments = res.data.assignments;
      this.checkSubmissionStatus();
    } catch (error) {
      console.error(error);
    }
  }

  checkSubmissionStatus() {
    // Replace this with your logic to check if the assignment is submitted
    // For now, let's assume it's submitted if githubLink is not empty
    this.isSubmitted = !!this.githubLink;
  }

  proceed() {}

  async submitAssignment(assignment: any) {
    // Implement the logic to submit the assignment, e.g., send data to a server
    // For now, we'll just update the submission status
    try {
      const res = await this.assignmentservice.updateAssignment({
        ...assignment,
        isSubmitted: true,
        githublink: this.githubLink,
        deployelink: this.deployLink,
        showSubmissionForm: true,
      }, assignment.id);

      alert('Assignment done');
      this.isSubmitted = true;
      this.loadAssignments();
    } catch (error: any) {
      alert(error.response.data.error || 'Error');
    }
  }

  async postEnrollment(id: any) {
    try {
      const res = await this.studentdeshboardservice.createenrollments({
        student_id: id,
        course_id: this.course_id,
      });
      console.log(res.data.message);
      alert(res.data.message);
    } catch (error: any) {
      console.error(error);
      alert(error.response.data.error);
      this.loadEnrollments();
    }
  }

  showTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
