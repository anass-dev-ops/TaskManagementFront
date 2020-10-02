import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  host = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getAllSectors() {
    return this.http.get( this.host + '/sectors');
  }
  getSectorsByProjectId(projectId: number) {
    return this.http.get( this.host + projectId + '/sectors');
  }
  saveSectorInProjectId(sector: any, projectId: number) {
    return this.http.post( this.host + projectId + '/saveSector', sector);
  }
}
