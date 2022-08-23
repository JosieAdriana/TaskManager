import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthenticatedComponent } from './components/not-authenticated/not-authenticated.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    NotAuthenticatedComponent,
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NotAuthenticatedComponent,
    AuthenticatedComponent,


  ]
})
export class LayoutsModule { }
