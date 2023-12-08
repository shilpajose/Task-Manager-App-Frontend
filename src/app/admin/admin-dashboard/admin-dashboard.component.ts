import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  data: any = []
  name: any = ''
  filterTasks: any = []
  count: any = ''
  mcount:any=''
  constructor(private ds: DataService, private rout: Router) { }
  ngOnInit(): void {
    this.ds.getAllTaskApi().subscribe({
      next: (result: any) => {
        this.data = result.message
        this.filterTasks = this.data
        this.count = this.filterTasks.length
        if (localStorage.getItem('CurrentUser')) {
          this.name = localStorage.getItem('CurrentUser')
        }
        this.ds.getAllUsersApi().subscribe({
          next: (result: any) => {
            this.data = result.message
            this.mcount=this.data.length
          }
        })
      }
    })
  }
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
}
