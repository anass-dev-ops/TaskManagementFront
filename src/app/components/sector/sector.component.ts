import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  projectId : number;
  sectors;
  Sectorform = new FormGroup({
    'name': new FormControl()
  });

  constructor(private sectorService: SectorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.onGetSectorsByProjectId(this.projectId);
  }

  onGetSectorsByProjectId(projectId) {
    this.sectorService.getSectorsByProjectId(projectId).subscribe(data => {
      this.sectors = data;
    }, err => {

    });
  }
  onSaveSectorInProjectId() {
    this.sectorService.saveSectorInProjectId(this.Sectorform.value , this.projectId)
    .subscribe(data => {
      this.onGetSectorsByProjectId(this.projectId);
    }, err => {
      this.onGetSectorsByProjectId(this.projectId);
    });
  }
}
