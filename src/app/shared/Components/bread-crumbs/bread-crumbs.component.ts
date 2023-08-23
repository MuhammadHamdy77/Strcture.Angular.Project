import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent {

  constructor(public bcService: BreadcrumbService) { }

}
