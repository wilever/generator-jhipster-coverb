import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { RESUME_ROUTE, ResumeComponent } from './';

@NgModule({
    imports: [
      JhipsterSharedModule,
      RouterModule.forRoot(
        [ RESUME_ROUTE ],
        { useHash: true })
    ],
    declarations: [
      ResumeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterResumeModule {}
