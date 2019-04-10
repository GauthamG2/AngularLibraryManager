import { Component, OnInit } from '@angular/core';
import { UserService } from 'user.service';
import { Router } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  books = []
   dvds = []

  constructor(private router: Router, private httpClient:HttpClient) { }

  ngOnInit() {
    this.getbook()
    this.getdvd()
  }
  getbook(): void {
  this.httpClient.get
  ('http://localhost:9000/getbook').toPromise().then(
    (res: any)=>{
      res.forEach(element=> {
        this.books.push(element)
      })
      console.log(this.books )}).catch(err=>console.log(err));
    }

     getdvd(): void {
       this.httpClient.get
       ('http://localhost:9000/getdvd').toPromise().then(
         (res: any)=>{
           res.forEach(element=> {
             this.dvds.push(element)
           })
           console.log(this.dvds )}).catch(err=>console.log(err));
         }
}
