import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

import { AuthGuard } from './shared/services/auth.service';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
    { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);