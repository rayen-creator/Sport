import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-matches',
  templateUrl: './res-matches.component.html',
  styleUrls: ['./res-matches.component.css']
})
export class ResMatchesComponent implements OnInit {

  matches:any;
  constructor() { }

  ngOnInit() {
    this.matches=[
      {id:1,logo1:"assets/images/logo_1.png",team1:'LIV', score1:'4', score2:'0' ,team2:'BARCA',logo2:"assets/images/logo_2.png"},
      {id:2,logo1:"assets/images/logo_1.png",team1:'MAN CITY', score1:'2', score2:'1' ,team2:'RM',logo2:"assets/images/logo_2.png"}
    ]
  }

}
