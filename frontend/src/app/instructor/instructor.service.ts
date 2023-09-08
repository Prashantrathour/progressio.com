import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }
  async getinstructor():Promise<AxiosResponse>{
    return await axios.get('https://progressiodeploye.onrender.com/instructor/')
  }
  async createinstructor(data:any):Promise<AxiosResponse>{
    return axios.post('https://progressiodeploye.onrender.com/instructor/create/',data)
  }
}
