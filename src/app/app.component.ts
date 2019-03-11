import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface News {
  heading:string,
  text:string
}
@Component({
  selector: 'app-root',
  template: `
      <div (clickOutside)="onClickedOutside($event)">
          clickOutside will not work outside of red border
      </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){

  }

  ngOnInit(): void {
  }

  onClickedOutside(){
    alert("hello");
  }

}
