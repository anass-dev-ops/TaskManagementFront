import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SectorService } from 'src/app/services/sector.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any;
  projectId: number;
  sectorsCurrentProject: any;
  states: any;
  typeStudys = [
    {id: 1, name: 'COMAC'},
    {id:2, name: 'CAPFT'}
  ];
  selectedTypeStudy;

  taskForm = new FormGroup({
    'name': new FormControl(),
    'description': new FormControl(),
    'startDate': new FormControl(),
    'releaseDate': new FormControl(),
    'sector': new FormControl(),
    'state': new FormControl(),
    'typeStudy': new FormControl()
  });
// 
  constructor(
    private taskService: TaskService,
    private sectorService: SectorService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.onGetTasksByProjectId(this.projectId);
    this.onGetSectorsInProjectId(this.projectId);
    this.onGetStates();
  }

  onGetTasksByProjectId(projectId) {
    this.taskService.getTasksByProjectId(projectId).subscribe(data => {
      this.tasks = data;
      // console.log(this.tasks);
    }, err => {
      // this.tasks = err;
    })
  }

  onSaveTask() {
    this.taskService.saveTask(this.taskForm.value).subscribe(data => {
      this.onGetTasksByProjectId(this.projectId);
      console.log(this.taskForm.value);
    }, err => {
      this.onGetTasksByProjectId(this.projectId);
      console.log(this.taskForm.value);
    })
  }

  onGetSectorsInProjectId(projectId) {
    this.sectorService.getSectorsByProjectId(projectId).subscribe(data => {
      this.sectorsCurrentProject = data;
    }, err => {

    });
  }

  onGetStates() {
    this.taskService.getStates().subscribe( data => {
      this.states = data;
    }, err => {

    });
  }

}
