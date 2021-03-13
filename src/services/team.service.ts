import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl='http://localhost:3000';

  constructor(private httpclient:HttpClient) { }
  
  Addteam(team:any){
    return this.httpclient.post(`${this.teamUrl}/Addteam`, team);
  }
  getAllTeams(){
   return this.httpclient.get<{allteams:any}>(`${this.teamUrl}/getAllTeams`);
  }

  getTeamByID(id){
    return this.httpclient.get(`${this.teamUrl}/getTeamByID/${id}`)
  }
  DeleteTeam (id){
    return this.httpclient.delete<{message:string}>(`${this.teamUrl}/DeleteTeam/${id}`)
  }
  EditTeam(team:any){
   return this.httpclient.put(`${this.teamUrl}/EditTeam/${team.id}`,team);
  }
}
