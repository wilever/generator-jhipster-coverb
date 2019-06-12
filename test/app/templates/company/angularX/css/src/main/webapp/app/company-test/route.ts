import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CompanyTestComponent } from './component';

export const COMPANY_TEST_ROUTE: Route = {
  path: 'company-test',
  component: CompanyTestComponent,
  data: {
    authorities: [],
    pageTitle: 'CompanyTest'
  },
  canActivate: [UserRouteAccessService]
};
