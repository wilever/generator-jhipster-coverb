import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { DefaultComponent } from './component';

export const DEFAULT_ROUTE: Route = {
  path: 'default',
  component: DefaultComponent,
  data: {
    authorities: [],
    pageTitle: 'Default'
  },
  canActivate: [UserRouteAccessService]
};
