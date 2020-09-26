import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectSeviceService {

  host = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getProjects() {
    return this.http.get( this.host + '/projects');
  }
  public saveProject( project: any) {
    return this.http.post( this.host + '/saveProject', project);
  }
  public deleteProject( id: number ) {
    return this.http.delete( this.host + '/deleteProject/' + id );
  }
}
