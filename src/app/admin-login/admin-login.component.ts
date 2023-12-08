import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin_login_Form = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(`[a-zA-Z]+`)]],
    password: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z]+`)]]
  })
  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }
  adminlogin() {
    if (this.admin_login_Form.valid) {
      this.ds.adminLoginApi(this.admin_login_Form.value.username, this.admin_login_Form.value.password).subscribe({
        next: (result: any) => {
          alert(result.message)
          localStorage.setItem("CurrentUser", result.Currentuser)
          localStorage.setItem("password", result.password)
          this.rout.navigateByUrl("admin/admin-dashboard")
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })
    }
    else {
      alert('this form is not valid')
    }
  }
}
