import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserM } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userarr:Array<UserM> = [];
  user:UserM = new UserM();

  registerForm = new FormGroup(
    {
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
    }
  )
 
  
  constructor(private userService:UserService, private router:Router) {
    
   }

  ngOnInit(): void {
  }

  addUser(){
    //adding data to userarr
    this.userarr.push(this.user);


    //adding user to data.json
    this.userService.addUser(this.user).subscribe(data => console.log(data))
    this.user = new UserM();
    this.router.navigate(['login']);
  }

   
}
