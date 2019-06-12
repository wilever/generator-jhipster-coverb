import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { DEFAULT_TEST_ROUTE, DefaultTestComponent } from './';

@NgModule({
  imports: [
    JhipsterSharedModule,
    RouterModule.forRoot(
      [ DEFAULT_TEST_ROUTE ],
      { useHash: true })
  ],
  declarations: [
    DefaultTestComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterDefaultTestModule { }
