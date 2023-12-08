import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasklistsComponent } from './tasklists/tasklists.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    TasklistsComponent,
    TaskdetailsComponent,
    EdittaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,FormsModule
  ]
})
export class TasksModule { }
