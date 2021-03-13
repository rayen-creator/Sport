import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//identifent du form
loginForm:FormGroup;
constructor(private formBuilder:FormBuilder , 
  private loginservice:UserService,
  private router : Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.minLength(8),Validators.required]]
    })
  }
  login(x){
    console.log("login is done !",x)
    this.loginservice.login(x).subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    )
  }

}
