import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  url = 'https://progressiodeploye.onrender.com/students/create_student/';

  async create_student(data: any): Promise<AxiosResponse> {
    console.log(data)
    try {
      const response = await axios.post(this.url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
