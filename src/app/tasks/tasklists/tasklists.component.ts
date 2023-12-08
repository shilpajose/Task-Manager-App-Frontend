import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tasklists',
  templateUrl: './tasklists.component.html',
  styleUrls: ['./tasklists.component.css']
})
export class TasklistsComponent {

  // variables
  name: any = ''
  data: any = []
  uid: any = ''
  cid:any=''

  // dependency injection 
  constructor(private ds: DataService, private rout: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    // get all task data
    this.ds.getAllTaskApi().subscribe({
      next: (result: any) => {
        this.data = result.message

        // storing the value in local storage 
        if (localStorage.getItem('CurrentUser')) {
          this.name = localStorage.getItem('CurrentUser')
        }
      }
    })
 
  }
  // task details page navigation
  viewTask(id: any) {
    this.rout.navigateByUrl(`tasks/taskdetails/${id}`)
  }
  // sort table table of task list user side
  titlesort(title: string): void {
    this.data.sort((a: any, b: any) => (b[title] - a[title] ? 1 : -1));
  }
  statussort(taskstatus: string): void {
    this.data.sort((a: any, b: any) => (a[taskstatus] - b[taskstatus] ? 1 : -1));
  }

  // logout
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
  editStatus(id:any){
    this.rout.navigateByUrl(`tasks/edittask/${id}`)
  }
  updateTask() {
    this.ds.editTaskApi(this.cid, this.data).subscribe({
      next: (result: any) => {
        // alert(result.message)
        this.rout.navigateByUrl("tasks")
      }
    })
  }

}
