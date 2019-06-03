import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { COMPANY_TEST_ROUTE, CompanyTestComponent } from './';

@NgModule({
  imports: [
    JhipsterSharedModule,
    RouterModule.forRoot(
      [ COMPANY_TEST_ROUTE ],
      { useHash: true })
  ],
  declarations: [
    CompanyTestComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterCompanyTestModule { }
