import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  async getannouncement():Promise<AxiosPromise>{
    return await axios.get('http://127.0.0.1:8000/announcement/')
  }
  async createannouncement(data:any):Promise<AxiosPromise>{
    return await axios.post('http://127.0.0.1:8000/announcement/create/',data)
  }
}
