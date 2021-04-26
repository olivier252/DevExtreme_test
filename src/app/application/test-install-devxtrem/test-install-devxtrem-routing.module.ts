import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestInstallDevxtremComponent } from './test-install-devxtrem.component';

const routes: Routes = [
  {path: '', component: TestInstallDevxtremComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestInstallDevxtremRoutingModule { }
