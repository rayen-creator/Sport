import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input() match:any;
  constructor() { }

  ngOnInit() {
  }

  color(x:number,y:number){
    if (x>y){
      return['green',1 ,'win' ] ;
    }
    else if (x<y){
      return ['red' , 0 , 'loss' ];
    }else{
      return ['blue', 2 , 'draw'];
    }
  }

  

}
