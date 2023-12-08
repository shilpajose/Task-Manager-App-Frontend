import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent {
  cid: any = ''
  data: any = []
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
