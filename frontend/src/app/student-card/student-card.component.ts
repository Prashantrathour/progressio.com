import { Component } from '@angular/core';
import { DeshboardService } from '../instructor-deshboard/deshboard.service';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  students: any = []
  constructor(private studentservice: DeshboardService, private deletestudentservice: StudentService) { }

  ngOnInit(): void {
    this.onload()
  }
  async onload(): Promise<void> {
    try {

      const res = await this.studentservice.getstudents()

      this.students = res.data.students
    } catch (error) {
      console.log(error)
    }
  }
  async deletestudent(id: any) {
    try {
      const res = await this.deletestudentservice.deletestudent(id)
      console.log(res)
      alert(res.data.message)
      this.onload()
    } catch (error) {
      console.log(error)
      alert("error")
    }
  }
}
