import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from '../environments/firebase.config';
import { initializeApp, database } from 'firebase';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthGuard } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    UsersListComponent,
    NavBarComponent,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routes
  ],
  providers: [AuthGuard,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
