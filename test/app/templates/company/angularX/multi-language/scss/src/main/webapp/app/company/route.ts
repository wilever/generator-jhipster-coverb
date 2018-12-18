import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CompanyComponent } from './component';

export const COMPANY_ROUTE: Route = {
  path: 'company',
  component: CompanyComponent,
  data: {
    authorities: [],
    pageTitle: 'company.page.title'
  },
  canActivate: [UserRouteAccessService]
};
