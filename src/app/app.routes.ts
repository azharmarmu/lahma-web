import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ItemsListComponent } from './items-list/items-list.component';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
    { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);