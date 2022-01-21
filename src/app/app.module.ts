import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SalesModule } from './sales/sales.module';

//cambiar el local
import localES from '@angular/common/locales/es-CO';
import localFR from '@angular/common/locales/fr';
;

import {registerLocaleData} from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SalesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
