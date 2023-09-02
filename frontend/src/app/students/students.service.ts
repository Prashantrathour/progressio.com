import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  url = 'http://127.0.0.1:8000/students/create_student/';

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
