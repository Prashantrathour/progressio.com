import { Injectable } from '@angular/core';
import axios,{AxiosResponse} from "axios"
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  url = 'https://carsbackend-ikuq.onrender.com/users/register';

  async register(data: any): Promise<AxiosResponse> {
    try {
      const response = await axios.post(this.url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
