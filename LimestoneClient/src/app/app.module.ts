import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "./service/user-service";
import { TicketsComponent } from './tickets/tickets.component';

const appRoutes: Routes = [
  {path: 'login', component:LoginComponent},
  /*{path: '',component: LoginComponent}*/
  {path: 'tickets', component:TicketsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TicketsComponent
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
export class AppModule { }
