import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  bookwarr:any;
  constructor(private router:Router, private wishlitss:WishlistService) {
    
   }

  ngOnInit(): void {
    this.wishlitss.getwbook().subscribe(data => this.bookwarr = data)
  }
  home(){
    this.router.navigate(['a-dashboard'])
  }
  deletebookx(id: any){
    this.wishlitss.deletebook(id).subscribe(data => {
      this.ngOnInit()
    })
  }
}
