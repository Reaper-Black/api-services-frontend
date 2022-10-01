import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';


const routes: Routes = [
  {path:'*',pathMatch: 'full', redirectTo: 'login'},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path: 'task', component: TasksComponent},
  {path: 'private-task', component: PrivateTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
