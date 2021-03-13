import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-macthes',
  templateUrl: './macthes.component.html',
  styleUrls: ['./macthes.component.css']
})
export class MacthesComponent implements OnInit {

  //definir Object
match:any={};
//definir Identifent du Form
matchForm:FormGroup;
//definir le FormBuilder
constructor(private fb:FormBuilder, private matchsservice:MatchService,private router:Router) { }

  ngOnInit() {
    this.matchForm=this.fb.group({
      score1:[''],
      score2:[''],
      team1:[''],
      team2:[''],
      logo1:[''],
      logo2:['']
    })
  }
  AddMatch(){
  this.matchsservice.AddMatch(this.match).subscribe(
    ()=>{
      this.router.navigate(['admin']);
        })
       }
}
