import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { BreadCrumbsComponent } from './Components/bread-crumbs/bread-crumbs.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BreadcrumbModule,
    NgxSpinnerModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
