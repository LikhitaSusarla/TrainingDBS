import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleSvcService {
todos:any;
  constructor() { }

  getAllTodos()
  {
    return this.todos;
  }
}
