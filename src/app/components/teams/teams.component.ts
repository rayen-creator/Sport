import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  //definir Object
  team:any={};
  //definir Identifent du Form
  teamForm:FormGroup;
  //definir le FormBuilder
  constructor(private fb:FormBuilder ,private router:Router, private teamservice:TeamService) { }

  ngOnInit() {
    this.teamForm=this.fb.group({
      name:[''],
      foundation:[''],
      staduim:[''],
      country:['']
    })

  }
  Addteam(){
    this.teamservice.Addteam(this.team).subscribe(
      ()=>{
        this.router.navigate(['admin']);

      }
    )
  }
}
