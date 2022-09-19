import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.router.navigate(['dashboard'])
  }
  gotoWishlist(){
    this.router.navigate(['wishlist']);
  }
}
