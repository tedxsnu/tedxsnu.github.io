import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PartnersComponent } from './partners/partners.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PaginationComponent } from './events/pagination/pagination.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PartnersComponent,
    EventsComponent,
    EventComponent,
    CopyrightComponent,
    PaginationComponent,
    TicketsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
