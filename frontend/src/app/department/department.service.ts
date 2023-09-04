import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  async getdepartment():Promise<AxiosPromise> {
    return await axios.get('http://127.0.0.1:8000/department')
  }
}
