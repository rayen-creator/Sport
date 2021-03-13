import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-tablematches',
  templateUrl: './tablematches.component.html',
  styleUrls: ['./tablematches.component.css']
})
export class TablematchesComponent implements OnInit {

  matches:any;
  constructor(private router:Router, private matchservice:MatchService) { }

  ngOnInit() {
      this.matchservice.GetAllMatchs().subscribe(
        (data) => {
          this.matches = data.allmatchs;
        }
      )
  }
  goToMatch(id){
    this.router.navigate([`displaymatch/${id}`])
    alert('BTN Clicked '+id);
  }
  DeleteMatch(id) {
    this.matchservice.DeleteMatch(id).subscribe(
      (dataDelete) => {
        console.log("player deleted succesfully", dataDelete.message);
        this.matchservice.GetAllMatchs().subscribe(
          (data) => {
            this.matches = data.allmatchs;
          }
        )
      }
    )
  }

  
}
