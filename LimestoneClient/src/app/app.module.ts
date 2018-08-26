import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "./service/user-service";
import {TicketsComponent} from './tickets/tickets.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {TicketComponent} from './ticket/ticket.component';
import {AddTicketComponent} from './add-ticket/add-ticket.component';

const appRoutes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  /*{path: '',component: LoginComponent}*/
  {path: 'tickets', component: TicketsComponent},
  {path: 'ticket/:name', component: TicketComponent},
  {path: 'addTicket', component: AddTicketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketsComponent,
    SignInComponent,
    SignUpComponent,
    TicketComponent,
    AddTicketComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
