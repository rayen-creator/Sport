import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayteam',
  templateUrl: './displayteam.component.html',
  styleUrls: ['./displayteam.component.css']
})
export class DisplayteamComponent implements OnInit {

  id:any;
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id =this.activatedroute.snapshot.paramMap.get('id')
  }

}
