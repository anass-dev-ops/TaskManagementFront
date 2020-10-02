import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectorComponent } from './components/sector/sector.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':projectId/tasks', component: TaskComponent},
  {path: ':projectId/sectors', component: SectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }