import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { RESUME_TEST_ROUTE, ResumeTestComponent } from './';

@NgModule({
  imports: [
    JhipsterSharedModule,
    RouterModule.forRoot(
      [ RESUME_TEST_ROUTE ],
      { useHash: true })
  ],
  declarations: [
    ResumeTestComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterResumeTestModule { }
