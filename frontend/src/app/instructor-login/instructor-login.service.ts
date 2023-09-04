import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstructorLoginService {
  constructor() { }
  url = 'http://127.0.0.1:8000/instructor_login';

  async login(data: Data): Promise<AxiosResponse> {
    try {
      const response = await axios.post(this.url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export interface Data {
  email: string;
  password: string;
}