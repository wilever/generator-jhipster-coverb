...

import { JhipsterDefaultModule } from 'app/coverb/default/module';
import { JhipsterResumeModule } from 'app/coverb/resume/module';
import { JhipsterCompanyModule } from 'app/coverb/company/module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
@NgModule({
  imports: [
    ...
    JhipsterDefaultModule,
    JhipsterResumeModule,
    JhipsterCompanyModule,
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
