import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from '../../features/layouts/layouts.module';
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
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    TaskComponent
  ]
})
export class PagesModule { }
