import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  host = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getTasksByProjectId(projectId: number) {
    return this.http.get( this.host + projectId + '/tasks');
  }

  saveTask(task: any) {
    return this.http.post( this.host + 'saveTask', task );
  }

  getStates() {
    return this.http.get( this.host + '/states');
  }
  /*
  getTypeStudys() {
    return this.http.get( this.host + '/typeS');
  }
  */
}
