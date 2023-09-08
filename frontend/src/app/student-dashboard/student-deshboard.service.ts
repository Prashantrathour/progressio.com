import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentDeshboardService {

  constructor() { }

  async getenrollments():Promise<AxiosPromise>{
    return await axios.get("https://progressiodeploye.onrender.com/enrollments/")
  }
  async createenrollments(data:any):Promise<AxiosPromise>{
    console.log(data)
    return await axios.post("https://progressiodeploye.onrender.com/enrollments/create/",data)
  }
}
