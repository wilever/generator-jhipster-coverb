import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { DEFAULT_ROUTE, DefaultComponent } from './';

@NgModule({
  imports: [
    JhipsterSharedModule,
    RouterModule.forRoot(
      [ DEFAULT_ROUTE ],
      { useHash: true })
  ],
  declarations: [
    DefaultComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterDefaultModule { }
