import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsplayer',
  templateUrl: './newsplayer.component.html',
  styleUrls: ['./newsplayer.component.css']
})
export class NewsplayerComponent implements OnInit {

  @Input() player:any;
  constructor() { }

  ngOnInit() {
  }

}
