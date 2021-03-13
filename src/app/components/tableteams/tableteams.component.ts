import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/services/team.service';

@Component({
  selector: 'app-tableteams',
  templateUrl: './tableteams.component.html',
  styleUrls: ['./tableteams.component.css']
})
export class TableteamsComponent implements OnInit {

  teams:any;
  constructor(private router:Router , private teamservice:TeamService) { }

  ngOnInit() {
    this.teamservice.getAllTeams().subscribe(
      (data) => {
      this.teams=data.allteams;
      }
    )
  }
gototeam(id){
  this.router.navigate([`displayteam/${id}`])
  alert('BTN Clicked '+id);
}
DeleteTeam(id){
  this.teamservice.DeleteTeam(id).subscribe(
    (dataDelete)=>{
    console.log("team deleted succesfully",dataDelete.message);   
   this.teamservice.getAllTeams().subscribe(
     (data) => {
       this.teams=data.allteams;
     }
   )
})
}
EditTeam(id){
  this.router.navigate([`editteam/${id}`])

}

}