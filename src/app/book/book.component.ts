import { Component, OnInit } from '@angular/core';
import { Book } from '../book.module';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'user.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit  {
  books = [];
 

  log(x) { console.log(x); }
  
  constructor(private router: Router, private user: UserService, private httpClient:HttpClient, private myFirstService : UserService){}

  ngOnInit() {
   
  }
  
//   get currentBook(){
//    return JSON.stringify(this.model);
// }
   menuclick(): void {
    this.router.navigate(["menu"]);
  }

  logoutclick(): void {
    this.router.navigate([""]);
  }

   add(form: NgForm) {

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'});
      let option = { headers : headers };

     let aa = new Book(form.value.title,form.value.isbn,form.value.sector,form.value.author,form.value.publisher,form.value.date,form.value.noofpages);
      this.books.push(aa);
     console.log(aa);
       
     this.httpClient.post
     ('http://localhost:9000/bookp', aa, {headers:headers}).toPromise().then(
       (res: any)=>{
         console.log(res)}).catch(err=>console.log(err));
  }
}