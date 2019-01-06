import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EventsComponent } from "./events/events.component";
import { PartnersComponent } from "./partners/partners.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "../../node_modules/@angular/core";

const appRoutes: Routes =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'events/:id', component: EventsComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ];

  @NgModule ({
      imports: [
          RouterModule.forRoot(appRoutes, {useHash: true})
      ],
      exports: [
          RouterModule
      ]
  })

export class AppRoutingModule {

}