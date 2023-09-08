import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstructorLoginService {
  constructor() { }
  url = 'https://progressiodeploye.onrender.com/instructor_login';

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