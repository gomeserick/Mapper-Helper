import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatTableModule } from '@angular/material/table';
import { DataGridComponent } from './index/data-grid/data-grid.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    IndexComponent,
    DataGridComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ComponentsModule
  ],
  exports: [
    IndexComponent
  ]
})
export class PageModule { }
