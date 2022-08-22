import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    TaskComponent
  ]
})
export class PagesModule { }
