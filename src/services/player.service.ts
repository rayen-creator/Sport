import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl='http://localhost:3000';

  constructor(private httpclient:HttpClient) { }
  
  addplayer(player:any){
    return this.httpclient.post(`${this.playerUrl}/addplayer`, player);
  }
  getAllPlayers(){
   return this.httpclient.get<{allPlayers:any}>(`${this.playerUrl}/getAllPlayers`);
  }

  getPlayerByID(id){
    return this.httpclient.get<{player:any}>(`${this.playerUrl}/getPlayerById/${id}`)
  }
  DeletePlayer (id){
    return this.httpclient.delete<{message:string}>(`${this.playerUrl}/deleteid/${id}`)
  }
  EditPlayer(player:any){
   return this.httpclient.put(`${this.playerUrl}/editplayerbyid/${player.id}`,player);
  }

}

