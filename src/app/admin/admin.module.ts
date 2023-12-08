import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddtaskComponent } from './admin-addtask/admin-addtask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTasklistComponent } from './admin-tasklist/admin-tasklist.component';
import { AdminMemberlistComponent } from './admin-memberlist/admin-memberlist.component';
import { AdminUpdatetaskComponent } from './admin-updatetask/admin-updatetask.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminAddtaskComponent,
    AdminTasklistComponent,
    AdminMemberlistComponent,
    AdminUpdatetaskComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
