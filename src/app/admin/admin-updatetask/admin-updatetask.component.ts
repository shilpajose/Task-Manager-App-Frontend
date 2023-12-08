import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-updatetask',
  templateUrl: './admin-updatetask.component.html',
  styleUrls: ['./admin-updatetask.component.css']
})
export class AdminUpdatetaskComponent {
  cid: any = ''
  data: any = []
  name:any=''
  constructor(private ar: ActivatedRoute, private ds: DataService, private rout: Router) { }
  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {
      this.cid = data.id
    })
    this.ds.getSingleTaskApi(this.cid).subscribe({
      next: (result: any) => {
        this.data = result.message
      }
    })
    this.ds.getAllTaskApi().subscribe({
      next: (result: any) => {
        this.data = result.message
        if (localStorage.getItem('CurrentUser')) {
          this.name = localStorage.getItem('CurrentUser')
        }
      }
    })

  }
  updateTask() {
    this.ds.editTaskApi(this.cid, this.data).subscribe({
      next: (result: any) => {
        // alert(result.message)
        this.rout.navigateByUrl("admin/admin-tasklist")
      }
    })
  }
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
}
