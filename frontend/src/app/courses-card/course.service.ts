import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  async getcourse():Promise<AxiosPromise>{
    return await axios.get('http://127.0.0.1:8000/course')
  }
  async deletecourse(id:any):Promise<AxiosPromise>{
    return await axios.delete('http://127.0.0.1:8000/course/delete/'+id)
  }
  async createcourse(data:any):Promise<AxiosPromise>{
    return await axios.post('http://127.0.0.1:8000/course/create/',data)
  }
}
