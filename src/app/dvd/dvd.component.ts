import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'user.service';
import { Dvd } from '../dvd.module';




@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})


export class DvdComponent implements OnInit {
  dvds = [];


  log(x) { console.log(x); }

  constructor(private router: Router, private user: UserService, private httpClient:HttpClient, private myFirstService : UserService) { }

  ngOnInit() {
  }

  menuclick(): void {
    this.router.navigate(["menu"]);
  }

  logoutclick(): void {
    this.router.navigate([""]);
  }



adddvd(form: NgForm) {

 let headers = new HttpHeaders({
   'Content-Type' : 'application/json'});
   let option = { headers : headers };

  let dvdnew = new Dvd(form.value.titledvd,form.value.isbndvd,form.value.creatordvd,form.value.publisherdvd,form.value.languagedvd,form.value.datedvd,
    form.value.totaltimedvd);

    this.dvds.push(dvdnew);
     console.log(dvdnew);
    

  
    
  this.httpClient.post
  ('http://localhost:9000/dvdp', dvdnew, {headers:headers}).toPromise().then(
    (res: any)=>{
      console.log(res)}).catch(err=>console.log(err));
}

}
