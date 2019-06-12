import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { ResumeTestComponent } from './component';

export const RESUME_TEST_ROUTE: Route = {
  path: 'resume-test',
  component: ResumeTestComponent,
  data: {
    authorities: [],
    pageTitle: 'resume-test.page.title'
  },
  canActivate: [UserRouteAccessService]
};
