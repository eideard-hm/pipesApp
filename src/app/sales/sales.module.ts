import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdenarComponent
  ]
})
export class SalesModule { }
