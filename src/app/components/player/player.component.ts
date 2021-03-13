import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
//definir Object
player:any={};
//definir Identifent du Form
playerForm:FormGroup;
//definir le FormBuilder
constructor(private fb:FormBuilder,private playerservice:PlayerService , private router:Router) { }

  ngOnInit() {
    this.playerForm=this.fb.group({
      name:[''],
      post:[''],
      Age:[''],
      Description:['']
    })
  }

  addPlayer(){
    this.playerservice.addplayer(this.player).subscribe(
      ()=>{
        this.router.navigate(['admin']);

      }
    )
  }

}
