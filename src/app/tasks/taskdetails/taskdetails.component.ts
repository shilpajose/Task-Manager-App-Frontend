import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {

  uid: any = ''
  data:any=[]
  constructor(private ar: ActivatedRoute, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.uid = data.id
      //  console.log(this.id);
    })
    this.ds.getSingleTaskApi(this.uid).subscribe({
      next: (result: any) => {
        this.data = result.message
        console.log(this.data);
      }
    })
  }
  editPage(id:any){
    this.rout.navigateByUrl(`tasks/edittask/${id}`)

  }
}
