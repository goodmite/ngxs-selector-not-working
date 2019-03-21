import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SaveVersionSuccess} from './state/app.actions';

export interface News {
  heading:string,
  text:string
}
@Component({
  selector: 'app-root',
  template: `
      <button (click)="test()">click</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @Select(state => state.version.versions) version$: Observable<any[]>;
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.version$.subscribe((versions) => {
      alert()
    });
  }


  test(){
    this.store.dispatch([
      new SaveVersionSuccess({bot:null, version:{id: 1, updated_fields:{'workflow':false}}})
    ]);
  }




}
