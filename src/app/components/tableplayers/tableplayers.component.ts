import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-tableplayers',
  templateUrl: './tableplayers.component.html',
  styleUrls: ['./tableplayers.component.css']
})
export class TableplayersComponent implements OnInit {

  players: any;
  constructor(private router: Router, private playerservice: PlayerService) { }

  ngOnInit() {
    this.playerservice.getAllPlayers().subscribe(
      (data) => {
        this.players = data.allPlayers;
      }
    )
  }
  goToPlayer(id) {
    this.router.navigate([`displayplayer/${id}`])
    alert('BTN Clicked ' + id);
  }
  deleteplayer(id) {
    this.playerservice.DeletePlayer(id).subscribe(
      (dataDelete) => {
        console.log("player deleted succesfully", dataDelete.message);
        this.playerservice.getAllPlayers().subscribe(
          (data) => {
            this.players = data.allPlayers;
          }
        )
      }
    )
  }
  editplayer(id) {
    this.router.navigate([`editplayer/${id}`])

  }

}
