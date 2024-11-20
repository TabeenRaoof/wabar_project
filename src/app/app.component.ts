import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AppRoutingModule } from './user-input/user-input-routing.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'wabar_project';
}




//@NgModule({

//  bootstrap: [AppComponent],
//  imports: [HeaderComponent, UserInputComponent, BrowserModule, HttpClientModule, AppRoutingModule],
//})




