...

import { JhipsterDefaultTestModule } from 'app/default-test/module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
@NgModule({
  imports: [
    ...
    JhipsterDefaultTestModule,
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
