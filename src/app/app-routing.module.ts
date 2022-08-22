import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/pages/components/login/login.component';
import { RegisterComponent } from './features/pages/components/register/register.component';
import { TaskComponent } from './features/pages/components/task/task.component';
import { LoginActivate } from './guards/LoginActivate';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TaskComponent, canActivate: [LoginActivate] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
