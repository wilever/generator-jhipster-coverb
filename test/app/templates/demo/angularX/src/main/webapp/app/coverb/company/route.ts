import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CompanyComponent } from './component';

export const COMPANY_ROUTE: Route = {
  path: 'coverb/company',
  component: CompanyComponent,
  data: {
    authorities: [],
    pageTitle: 'Company'
  },
  canActivate: [UserRouteAccessService]
};
