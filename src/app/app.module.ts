import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JwtInterceptorInterceptor } from './core/Interceptors/jwt-interceptor.interceptor';
import { ErrorinterceptorInterceptor } from './core/Interceptors/errorinterceptor.interceptor';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ViewModule,
    NgxSpinnerModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: JwtInterceptorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS , useClass: ErrorinterceptorInterceptor, multi:true},
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
