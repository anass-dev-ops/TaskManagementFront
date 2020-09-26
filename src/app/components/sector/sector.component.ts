import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  sectors;
  Sectorform = new FormGroup({
    'name': new FormControl()
  });

  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.onGetSectors();
  }

  onGetSectors() {
    this.sectorService.getAllSectors().subscribe(data => {
      this.sectors = data;
    }, err => {

    });
  }
}
