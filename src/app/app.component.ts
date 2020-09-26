import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectSeviceService } from './services/project-sevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TaskManagement';
  state = false;
  projects;
  stateCreationProject = false;
  createProjectForm = new FormGroup({
    'name': new FormControl(),
    'startDate': new FormControl()
  })
  constructor(private projectService: ProjectSeviceService) { }

  ngOnInit(): void {
    this.onGetProjects();
  }

  public onGetProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    }, err => {

    });
  }

  onCreateProject() {
    // console.log(this.createProjectForm.value);
    this.projectService.saveProject(this.createProjectForm.value).subscribe(data => {
      this.stateCreationProject = !this.stateCreationProject;
      this.onGetProjects();
    }, err => {
      this.stateCreationProject = !this.stateCreationProject;
      this.onGetProjects();
      console.log(err);
    })
  }

  onDeleteProject( id ) {
    this.projectService.deleteProject(id).subscribe(data => {
      this.onGetProjects();
    },err => {
      this.onGetProjects();

    })
  }
}
