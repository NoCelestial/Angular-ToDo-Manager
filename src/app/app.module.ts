import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from './Services/to-do.service';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, InputComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ToDoService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
