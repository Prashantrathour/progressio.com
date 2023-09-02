import { Injectable } from '@angular/core';
import axios,{AxiosResponse} from "axios"
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  url = 'http://127.0.0.1:8000/user/register/';

  async register(data: any): Promise<AxiosResponse> {
    try {
      const response = await axios.post(this.url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
