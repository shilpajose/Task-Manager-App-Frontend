import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-addtask',
  templateUrl: './admin-addtask.component.html',
  styleUrls: ['./admin-addtask.component.css']
})
export class AdminAddtaskComponent {

  name: any = ''
// validation and accessing form field data
  add_task_form = this.fb.group({
    title: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    description: ['',[Validators.required, Validators.pattern('[a-zA-Z,. ]+')]],
    email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    taskstatus: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]],
    date: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9-]+')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('CurrentUser')) {
      this.name = localStorage.getItem('CurrentUser')
    }
  }

  addTask() {
    if (this.add_task_form.valid) {
      this.ds.addTaskApi(this.add_task_form.value.title, this.add_task_form.value.description,
        this.add_task_form.value.email, this.add_task_form.value.taskstatus, this.add_task_form.value.date).subscribe({
          next: (result: any) => {
            console.log(result);
            alert('New Task Assigned')
            this.rout.navigateByUrl("admin/admin-tasklist")
          },error:(result:any)=>{
            alert(result.error.message)
          }
        })
    }
    else {
      alert('Please fill the form')
    }
  }
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
}
