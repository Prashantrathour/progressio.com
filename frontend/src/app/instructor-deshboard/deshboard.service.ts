import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DeshboardService {

  constructor() { }


  async getstudents(): Promise<AxiosResponse>  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/students');
      return response;
    } catch (error) {
      throw error;
    }
  }
}
