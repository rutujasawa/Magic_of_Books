import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookM } from '../models/book/book.module';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpclient:HttpClient) { }
  addwbook(bookx: BookM){
    return this.httpclient.post<BookM>("http://localhost:3000/Wishlist", bookx)
  }

  getwbook(){
    return this.httpclient.get('http://localhost:3000/Wishlist')
  }

  deletebook(id:any){
    return this.httpclient.delete(`http://localhost:3000/Wishlist/${id}`)
  }
}
