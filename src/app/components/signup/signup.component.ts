import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  //identifent du form
  signupForm:FormGroup
  constructor(private formBuilder:FormBuilder , 
    private signupservice:UserService,
    private router : Router) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      FirstName:['' ,[Validators.minLength(3),Validators.required]],
      LastName:['',[Validators.minLength(5),Validators.required]],
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.minLength(8),Validators.required]],
      ConfirmPasswd:['']
    })
  }
  
  signup(x){
    console.log("sign up done !",x)
    this.signupservice.signup(x).subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    )
  }

}
