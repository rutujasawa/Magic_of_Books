import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//.................................................
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import {MatCardModule} from '@angular/material/card';
import { WoLoginBookComponent } from './components/wo-login-book/wo-login-book.component';

import { HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAftLoginComponent } from './components/dashboard-aft-login/dashboard-aft-login.component';
import { LoginBookComponent } from './components/login-book/login-book.component';
import { WishlistComponent } from './components/wishlist/wishlist.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderLoginComponent,
    WoLoginBookComponent,
    DashboardAftLoginComponent,
    LoginBookComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
