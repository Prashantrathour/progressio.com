import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentDeshboardService {

  constructor() { }

  async getenrollments():Promise<AxiosPromise>{
    return await axios.get("http://127.0.0.1:8000/enrollments")
  }
  async createenrollments(data:any):Promise<AxiosPromise>{
    console.log(data)
    return await axios.post("http://127.0.0.1:8000/enrollments/create/",data)
  }
}
