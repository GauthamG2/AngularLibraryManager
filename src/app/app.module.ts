import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';

import { DeletedvdComponent } from './deletedvd/deletedvd.component';
import { DisplayComponent } from './display/display.component';
import { DvdComponent } from './dvd/dvd.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BorrowComponent } from './borrow/borrow.component';








const appRoutes : Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'book',
    component:BookComponent
  },

  {
    path:'delete',
    component:DeleteComponent
  },

  {
    path:'display',
    component:DisplayComponent
  },

  {
    path:'dvd',
    component:DvdComponent
  },

  {
    path:'deletedvd',
    component:DeletedvdComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'borrow',
    component:BorrowComponent
  }
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    BookComponent,
    DeleteComponent,
    DeletedvdComponent,
    DisplayComponent,
    DvdComponent,
    BorrowComponent,
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
