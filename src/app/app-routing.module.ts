import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/dashboard'},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'private', component: PrivateTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
