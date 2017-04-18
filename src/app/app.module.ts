import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from '../environments/firebase.config';
import { initializeApp, database } from 'firebase';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

import { AuthGuard } from './shared/services/auth.service';
import { FirebaseService } from './shared/services/firebase.service';

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
    NgxPaginationModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routes
  ],
  providers: [AuthGuard,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
