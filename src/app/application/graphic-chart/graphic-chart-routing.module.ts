import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicChartComponent } from './graphic-chart.component';

const routes: Routes = [
  {path: '', component: GraphicChartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicChartRoutingModule { }
