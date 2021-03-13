import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL="http://localhost:3000";

  constructor(private httpclient:HttpClient) { }

  login(user:any){
    return this.httpclient.post<{message:string}>(`${this.userURL}/login/`,user);
  }

  signup(user:any){
    return this.httpclient.post<{message:string}>(`${this.userURL}/signup`,user);
  }

}
