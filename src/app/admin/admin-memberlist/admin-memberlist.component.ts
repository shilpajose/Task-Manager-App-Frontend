import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-memberlist',
  templateUrl: './admin-memberlist.component.html',
  styleUrls: ['./admin-memberlist.component.css']
})
export class AdminMemberlistComponent {

  name: any = ''
  data: any = []

  constructor(private rout: Router, private ds: DataService) { }
  ngOnInit(): void {
    this.ds.getAllUsersApi().subscribe({
      next: (result: any) => {
        this.data = result.message
        if (localStorage.getItem('CurrentUser')) {
          this.name = localStorage.getItem('CurrentUser')
        }
      }
    })
  }
  logout() {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('password')
    this.rout.navigateByUrl("")
  }
}
