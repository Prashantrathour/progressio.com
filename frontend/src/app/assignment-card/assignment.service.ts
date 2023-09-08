import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
url='https://progressiodeploye.onrender.com/assignments/'
  constructor() { }
  async getAssignment():Promise<AxiosResponse>{
    return await axios.get(this.url)
  }
  async updateAssignment(data:any,id:any):Promise<AxiosResponse>{
    console.log(data)
    return await axios.put(this.url+`update/${id}/`,data)
  }
  async createAssignment(data:any):Promise<AxiosResponse>{
   console.log(data)
    return await axios.post("https://progressiodeploye.onrender.com/assignments/create/",data)
  }

  async submitAssignment(data:any):Promise<AxiosResponse>{
   
    return await axios.post("https://progressiodeploye.onrender.com/assignments/assignment-submissions/",data)
  }
  async deleteAssignment(id:any):Promise<AxiosResponse>{
    
    return await axios.delete(this.url+`delete/${id}/`)
  }
}
