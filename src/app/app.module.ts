import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from './Services/to-do.service';
import { InputComponent } from './Components/input/input.component';
import { HomeComponent } from './Components/home/home.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './Components/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, InputComponent, HomeComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ToDoService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
