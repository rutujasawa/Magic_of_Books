import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserM } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  loginForm = new FormGroup(
    {
      username : new FormControl("", [ Validators.required]),
      password : new FormControl("", [ Validators.required])
    }
  )

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  getUser() {
    this.userService.getUser().subscribe(data => {
      // this.userarr = data
      let i:number =0; let counter:number = 0;
      for(i=0; i<data.length; i++){
        if(data[i].userName == this.loginForm.value.username && data[i].password == this.loginForm.value.password){
          counter++
        }
        if(counter > 0){
          localStorage.setItem('username', this.loginForm.value.username)
          this.router.navigate(['a-dashboard'])
        }
      }
    })
  }
}
