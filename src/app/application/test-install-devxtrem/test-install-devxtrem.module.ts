import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestInstallDevxtremRoutingModule } from './test-install-devxtrem-routing.module';
import { TestInstallDevxtremComponent } from './test-install-devxtrem.component';
import { DxButtonModule } from 'devextreme-angular';





@NgModule({
  declarations: [
    TestInstallDevxtremComponent
  ],
  exports: [TestInstallDevxtremComponent],
  imports: [
    CommonModule,
    DxButtonModule,
    TestInstallDevxtremRoutingModule,
  ]
})
export class TestInstallDevxtremModule { }
