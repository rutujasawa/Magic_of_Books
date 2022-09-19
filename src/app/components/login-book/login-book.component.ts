import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookM } from 'src/app/models/book/book.module';
import { BookService } from 'src/app/service/book.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-login-book',
  templateUrl: './login-book.component.html',
  styleUrls: ['./login-book.component.css']
})
export class LoginBookComponent implements OnInit {

  username: string | null = "";


  bookarr: any
  constructor(private bookservice: BookService, private router: Router, private wishlistss: WishlistService) {
    this.bookservice.getBooks().subscribe(data => {
      this.bookarr = data;

      this.username = localStorage.getItem('username');
    })
  }

  ngOnInit(): void {
  }

  bookxarr: Array<BookM> = [];
  bookx:BookM = new BookM

  addtoWishlist(idx: any) {


    this.bookx = this.bookarr.forEach((ele: { id: any; }) => {
      if (ele.id == idx) {

        this.bookx = this.bookarr[idx]
        //adding data to userarr bookxarr
        this.bookxarr.push(this.bookx);


        //adding bookx to data.json
        this.wishlistss.addwbook(this.bookx).subscribe(data => console.log(data))
        this.bookx = new BookM();

      }
    });
  }
}
