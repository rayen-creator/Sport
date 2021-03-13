import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

    matchURL='http://localhost:3000';
  
    constructor(private httpclient:HttpClient) { }
    
    AddMatch(match:any){
      return this.httpclient.post(`${this.matchURL}/AddMatch`, match);
    }
    GetAllMatchs(){
     return this.httpclient.get<{allmatchs:any}>(`${this.matchURL}/GetAllMatchs`);
    }
  
    GetMatchByID(id){
      return this.httpclient.get<{match:any}>(`${this.matchURL}/GetMatchByID/${id}`)
    }
    DeleteMatch (id){
      return this.httpclient.delete<{message:string}>(`${this.matchURL}/DeleteMatch/${id}`)
    }
    EditMatch(match:any){
     return this.httpclient.put(`${this.matchURL}/EditMatch/${match.id}`,match);
    }

  }
