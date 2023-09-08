import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  async getcourse():Promise<AxiosPromise>{
    return await axios.get('https://progressiodeploye.onrender.com/course/')
  }
  async deletecourse(id:any):Promise<AxiosPromise>{
    return await axios.delete('https://progressiodeploye.onrender.com/course/delete/'+id)
  }
  async createcourse(data:any):Promise<AxiosPromise>{
    return await axios.post('https://progressiodeploye.onrender.com/course/create/',data)
  }
}
