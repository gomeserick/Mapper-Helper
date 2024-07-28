import { Component } from '@angular/core';
import { parse } from 'csv-parse/browser/esm/sync';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  public mainData: Observable<any[]> = new Observable<any[]>();
  public secondData: Observable<any[]> = new Observable<any[]>();


  public onFileSelected(event: any, grid: number) {
    if (event.target.files.length == 0) {
      return;
    }
    event.target.files[0].text().then((text: string) => {
      let string = parse(text as string, {
        columns: true,
        skip_empty_lines: true,
        bom: true,
        delimiter: ';'
      })

      if(grid == 1) {
        this.mainData = new BehaviorSubject<any[]>(string).asObservable();
      } else {
        this.secondData = new BehaviorSubject<any[]>(string).asObservable();
      }

    })
  }
}
