import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from "@angular/material/button";
import{MatIconModule} from "@angular/material/icon";
import{MatSnackBarModule} from "@angular/material/snack-bar";
import{MatCardModule} from "@angular/material/card";
import{MatDividerModule} from "@angular/material/divider";





@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    PostCardComponent,
    PostDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
