import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.service';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const router: Routes = [
    { path: '', redirectTo: 'login-email', pathMatch: 'full' },
    { path: 'login-email', component: EmailComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);