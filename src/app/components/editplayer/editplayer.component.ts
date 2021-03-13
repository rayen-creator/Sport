import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {

 //definir Object
 id:any;
player:any={};
//definir Identifent du Form
playerForm:FormGroup;
//definir le FormBuilder
constructor(private fb:FormBuilder,private playerservice:PlayerService , private router:Router, private activatedroute:ActivatedRoute ) 
  { }

  ngOnInit() {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.playerservice.getPlayerByID(this.id).subscribe(
      (data) => {
        this.player = data;
      }
    )
    this.playerForm=this.fb.group({
      name:[''],
      post:[''],
      Age:[''],
      Description:['']
    })
  }

  EditPlayer(){
    this.playerservice.EditPlayer(this.player).subscribe(
      ()=>{
        this.router.navigate(['admin']);

      }
    )
  }


}
