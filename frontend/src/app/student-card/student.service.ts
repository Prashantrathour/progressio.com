import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  async deletestudent(id:any):Promise<AxiosPromise>{
return await axios.delete("https://progressiodeploye.onrender.com/students/delete/"+id+"/")
  }
}
