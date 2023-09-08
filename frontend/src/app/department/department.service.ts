import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  async getdepartment():Promise<AxiosPromise> {
    return await axios.get('https://progressiodeploye.onrender.com/department/')
  }
}
