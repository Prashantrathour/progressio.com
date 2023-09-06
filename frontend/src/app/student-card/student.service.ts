import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  async deletestudent(id:any):Promise<AxiosPromise>{
return await axios.delete("http://127.0.0.1:8000/students/delete/"+id+"/")
  }
}
