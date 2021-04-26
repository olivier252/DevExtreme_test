import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';


@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule
  ]
})
export class DocModule { }
