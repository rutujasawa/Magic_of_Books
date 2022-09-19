import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-wo-login-book',
  templateUrl: './wo-login-book.component.html',
  styleUrls: ['./wo-login-book.component.css']
})
export class WoLoginBookComponent implements OnInit {

  bookarr: any
  constructor(private bookservice: BookService) {
    this.bookservice.getBooks().subscribe(data => {
      this.bookarr = data;
    })
  }

  ngOnInit(): void {
  }
  // getBooks(){
  //   this.bookservice.getBooks().subscribe( data => {
  //     this.bookarr = data;
  //   })
}




