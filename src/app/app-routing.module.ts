import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NewUsersComponent } from './components/new-users/new-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

import { AuthGuard } from "./auth.guard";




const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/dashboard'},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'products', component: NewProductsComponent, canActivate: [AuthGuard]},
  {path: 'edit-product/:id', component: NewProductsComponent},
  {path: 'list-products', component:ListProductsComponent, canActivate: [AuthGuard]},
  {path:'aboutme', component: AboutMeComponent},
  {path: 'create-user', component: NewUsersComponent, canActivate: [AuthGuard]},
  {path: 'list-user', component: ListUsersComponent, canActivate: [AuthGuard]},
  {path: 'edit-user/:id', component: NewUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
