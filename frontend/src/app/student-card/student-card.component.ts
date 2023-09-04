import { Component } from '@angular/core';
import { DeshboardService } from '../instructor-deshboard/deshboard.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  students:any=[]
  constructor(private studentservice:DeshboardService){}

  async ngOnInit():Promise<void>{
    const res=await this.studentservice.getstudents()
    console.log(res)
    this.students=res.data.students
  }
}
