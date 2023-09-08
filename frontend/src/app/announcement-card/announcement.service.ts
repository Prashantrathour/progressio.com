import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  async getannouncement():Promise<AxiosPromise>{
    return await axios.get('https://progressiodeploye.onrender.com/announcement/')
  }
  async createannouncement(data:any):Promise<AxiosPromise>{
    return await axios.post('https://progressiodeploye.onrender.com/announcement/create/',data)
  }
  async deleteannouncement(id:any):Promise<AxiosPromise>{
    return await axios.delete('https://progressiodeploye.onrender.com/announcement/delete/'+id+'/')
  }
}
