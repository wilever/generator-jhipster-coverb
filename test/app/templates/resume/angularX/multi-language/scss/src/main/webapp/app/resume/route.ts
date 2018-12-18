import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { ResumeComponent } from './component';

export const RESUME_ROUTE: Route = {
  path: 'resume',
  component: ResumeComponent,
  data: {
    authorities: [],
    pageTitle: 'resume.page.title'
  },
  canActivate: [UserRouteAccessService]
};
