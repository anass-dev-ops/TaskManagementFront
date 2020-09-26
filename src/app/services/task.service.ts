import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  host = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get( this.host + '/tasks');
  }
}
