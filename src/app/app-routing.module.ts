import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAddtaskComponent } from './admin/admin-addtask/admin-addtask.component';
import { AdminTasklistComponent } from './admin/admin-tasklist/admin-tasklist.component';
import { AdminMemberlistComponent } from './admin/admin-memberlist/admin-memberlist.component';
import { TaskdetailsComponent } from './tasks/taskdetails/taskdetails.component';
import { EdittaskComponent } from './tasks/edittask/edittask.component';
import { AdminUpdatetaskComponent } from './admin/admin-updatetask/admin-updatetask.component';

const routes: Routes = [{path:"",component:UserLoginComponent},
{path:"user-register",component:UserRegisterComponent},
{ path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
{path:"admin-login",component:AdminLoginComponent},
{path:"admin/admin-dashboard",component:AdminDashboardComponent},
{path:"admin/admin-addtask",component:AdminAddtaskComponent},
{path:"admin/admin-tasklist",component:AdminTasklistComponent},
{path:"admin/admin-memberlist",component:AdminMemberlistComponent},
{path:"tasks/taskdetails/:id",component:TaskdetailsComponent},
{path:"tasks/edittask/:id",component:EdittaskComponent},
{path:"admin/admin-updatetask/:id",component:AdminUpdatetaskComponent},

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



