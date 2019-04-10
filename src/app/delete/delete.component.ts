import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  books = []
   dvds = []
    deletebook = []
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


           Erase(a):void{
             console.log(a);
             const b = Object.assign({},this.books[a]);
             console.log(b.isbn);
             let isbn = b.isbn;
             console.log(isbn);
             this.books.splice(a,1);
             //console.log();

             this.httpClient.delete(`http://localhost:9000/eraseb/${isbn}`).toPromise().then((res:any) =>{console.log(res)}).catch(err=>console.log(err));
           
           }

}
