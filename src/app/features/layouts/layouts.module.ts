import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthenticatedComponent } from './components/not-authenticated/not-authenticated.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';



@NgModule({
  declarations: [
    NotAuthenticatedComponent,
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotAuthenticatedComponent,
    AuthenticatedComponent,


  ]
})
export class LayoutsModule { }
