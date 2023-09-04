import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }
  async getinstructor():Promise<AxiosResponse>{
    return await axios.get('http://127.0.0.1:8000/instructor')
  }
  async createinstructor(data:any):Promise<AxiosResponse>{
    return axios.post('http://127.0.0.1:8000/instructor/create/',data)
  }
}
