import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-tasklist',
  templateUrl: './admin-tasklist.component.html',
  styleUrls: ['./admin-tasklist.component.css']
})
export class AdminTasklistComponent {

  // variables
  data: any = []
  name: any = ''
  filterTasks: any = []
  mydta:any=[]

  // dependency injection
  constructor(private ds: DataService, private rout: Router) { }
  ngOnInit(): void {
    // all task list display
    this.ds.getAllTaskApi().subscribe({
      next: (result: any) => {
        this.data = result.message
        this.filterTasks = this.data
        if (localStorage.getItem('CurrentUser')) {
          this.name = localStorage.getItem('CurrentUser')
        }
      }
    })
  }
  // filter functionality for status pending/completed/all
  taskFilter(taskstatus: any) {
    this.filterTasks = this.data.filter((item: any) =>
      item['taskstatus'] == taskstatus || taskstatus == "")
    console.log(this.filterTasks);

  }
  // logout
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
  // edit page navigation
  editPage(id: any) {
    this.rout.navigateByUrl(`admin/admin-updatetask/${id}`)
  }
  // delete task
  deleteTask(id: any) {
    this.ds.deleteTaskApi(id).subscribe({
      next: (result: any) => {
        alert(result.message)
        // refresh
        this.ds.getAllTaskApi().subscribe({
          next: (result: any) => {
            this.data = result.message
          }
        })
      },error:(result:any)=>{
        alert(result.error.message)
      }
    })
  }
}
