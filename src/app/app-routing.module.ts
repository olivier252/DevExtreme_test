import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './general/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'install', loadChildren: () => import('./application/test-install-devxtrem/test-install-devxtrem.module')
      .then(mod => mod.TestInstallDevxtremModule)
  },
  {
    path: 'bar-charts', loadChildren: () => import('./application/graphic-chart/graphic-chart.module')
      .then(mod => mod.GraphicChartModule)
  },
  {
    path: 'data-grid', loadChildren: () => import('./application/data-grid/data-grid.module')
      .then(mod => mod.DataGridModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



