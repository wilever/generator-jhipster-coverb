...

import { JhipsterCompanyTestModule } from 'app/company-test/module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
@NgModule({
  imports: [
    ...
    JhipsterCompanyTestModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
  ],
  declarations: [
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [
    ...
  ]
})
export class JhipsterAppModule {
}
