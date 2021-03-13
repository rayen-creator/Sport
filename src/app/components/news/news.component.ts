import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

   players:any;
  constructor() { }

  ngOnInit() {
    this.players =[
      {id:1, name:'CR7', post:'CF ',N:'7',Age:'36',Description:'World Class'},
      {id:2, name:'Messi', post:'RW ',N:'10',Age:'33',Description:'World Class'},
      {id:3, name:'Mo Salah', post:'RW ',N:'10',Age:'28',Description:'World Class'}
    ]
  }

}
