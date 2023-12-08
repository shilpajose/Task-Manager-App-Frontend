import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  // name: any = ''
  // companyemail: any = ''

  user_login_Form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`)]],
    password: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z.@]+`)]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }
  userlogin() {
    if (this.user_login_Form.valid) {
      this.ds.userLoginApi(this.user_login_Form.value.email, this.user_login_Form.value.password).subscribe({
        next: (result: any) => {
          alert(result.message)
          localStorage.setItem("uid", result.uid)
          localStorage.setItem("CurrentUser", result.Currentuser)
          localStorage.setItem("Email", result.email)
          this.rout.navigateByUrl("tasks")
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })
    } else {
      alert('Form is not valid')
    }
  }
}
