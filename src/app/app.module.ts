import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


export const firebaseConfig = {
    apiKey: "AIzaSyDBCKrGNaP4OZ28oFHDh3ryXiu-96pkDUw",
    authDomain: "lahma-ef943.firebaseapp.com",
    databaseURL: "https://lahma-ef943.firebaseio.com",
    projectId: "lahma-ef943",
    storageBucket: "lahma-ef943.appspot.com",
    messagingSenderId: "832486922905"
};

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
