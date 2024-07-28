import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 } from 'uuid';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    (changes["data"].currentValue as Observable<any[]>).subscribe((data: any[]) => {
      this.columnsToDisplay = Object.keys(data[0]);
    })
  }

@Input() public data: Observable<any[]> = new Observable<any[]>();
@Output() public onDataSelected = new EventEmitter<any[]>();

  public columnsToDisplay: string[] = [];

  public dataSelected(data: any) {
  this.onDataSelected.emit(data);
}
}
