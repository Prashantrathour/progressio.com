import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse for typing the response data

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  url = 'http://127.0.0.1:8000/user/login/';

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
  username: string;
  password: string;
}
