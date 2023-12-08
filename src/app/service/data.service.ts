import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: any = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  // new candidate registration
  userRegisterApi(fullname: any, email: any, password: any,) {
    const bodyData = { fullname, email, password }
    return this.http.post(`${this.baseUrl}/register`, bodyData)
  }
  // user login
  userLoginApi(email: any, password: any) {
    const data = { email, password }
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  // Admin-login
  adminLoginApi(username: any, password: any) {
    const body = { username, password }
    return this.http.post(`${this.baseUrl}/admin-login`, body)
  }
  // new task adding
  addTaskApi(title: any, description: any, email: any, taskstatus: any, date: any) {
    const bodyData = { title, description, email, taskstatus, date }
    return this.http.post(`${this.baseUrl}/addtask`, bodyData)
  }
  // get all tasks
  getAllTaskApi() {
    return this.http.get(`${this.baseUrl}/getalltasks`)
  }
    // get all users
    getAllUsersApi(){
      return this.http.get(`${this.baseUrl}/getallusers`)
    }
    // get one task
    getSingleTaskApi(id:any){
      return this.http.get(`${this.baseUrl}/one-task/${id}`)
    }

    // edit task
    editTaskApi(id: any, bodyData: any) {
      return this.http.put(`${this.baseUrl}/edittask/${id}`, bodyData)
    }
    //   // delete task admin
  deleteTaskApi(id: any) {
    return this.http.delete(`${this.baseUrl}/delete-task/${id}`)
  }
}
