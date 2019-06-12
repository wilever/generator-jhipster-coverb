import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { DefaultTestComponent } from './component';

export const DEFAULT_TEST_ROUTE: Route = {
  path: 'default-test',
  component: DefaultTestComponent,
  data: {
    authorities: [],
    pageTitle: 'default-test.page.title'
  },
  canActivate: [UserRouteAccessService]
};
