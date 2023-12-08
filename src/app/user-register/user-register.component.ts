import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  userRegisterForm = this.fb.group({
    fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  userRegister() {
    if (this.userRegisterForm.valid) {
      this.ds.userRegisterApi(this.userRegisterForm.value.fullname,
        this.userRegisterForm.value.email, this.userRegisterForm.value.password).subscribe({
          next: (result: any) => {
            console.log(result);
            alert('New user Registered')
            this.rout.navigateByUrl("")
          },
          error:(result:any)=>{
            alert(result.error.message)
          }
        })
    }
    else {
      alert('Please fill the form')
    }
  }
}
