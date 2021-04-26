import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridRoutingModule } from './data-grid-routing.module';
import { DataGridComponent } from './data-grid.component';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  DxButtonModule, 
  DxCheckBoxModule, 
  DxDataGridModule } from 'devextreme-angular';
import DevExpress from 'devextreme';

@NgModule({
  declarations: [
    DataGridComponent
  ],
  imports: [
    CommonModule,
    DataGridRoutingModule,
    ReactiveFormsModule,
    // DevExtreme
    DxDataGridModule,
    DxCheckBoxModule,
    DxButtonModule,
  ]
})
export class DataGridModule { }
