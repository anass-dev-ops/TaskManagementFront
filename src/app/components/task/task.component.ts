import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.onGetAllTasks();
  }

  onGetAllTasks() {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
      // console.log(this.tasks);
    }, err => {
      // this.tasks = err;
    })
  }

}
