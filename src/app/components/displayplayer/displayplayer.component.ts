import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-displayplayer',
  templateUrl: './displayplayer.component.html',
  styleUrls: ['./displayplayer.component.css']
})
export class DisplayplayerComponent implements OnInit {

  id:any;
  player:any;
  constructor(private activatedroute:ActivatedRoute,private playerService:PlayerService) { }

  ngOnInit() {
    this.id =this.activatedroute.snapshot.paramMap.get('id')
    this.playerService.getPlayerByID(this.id).subscribe(
      (data)=>{
        this.player = data.player;
      }
    )
  }

}
