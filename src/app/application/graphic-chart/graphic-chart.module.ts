import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicChartRoutingModule } from './graphic-chart-routing.module';
import { GraphicChartComponent } from './graphic-chart.component';
import { DxChartModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    GraphicChartComponent
  ],
  imports: [
    CommonModule,
    GraphicChartRoutingModule,
    DxChartModule
  ]
})
export class GraphicChartModule { }
