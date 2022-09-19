import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserM } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  constructor(private httpclient:HttpClient) { }

  getUser(): Observable<Array<UserM>> {
    return this.httpclient.get<Array<UserM>>("http://localhost:3000/Users");
  }

  addUser(user: UserM){
    return this.httpclient.post<UserM>("http://localhost:3000/Users", user)
  }
}
