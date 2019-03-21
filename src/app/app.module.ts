import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClickOutsideModule} from 'ng-click-outside';
import {NgxsModule} from '@ngxs/store';
import {VersionStateReducer} from './state/app.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClickOutsideModule,
    NgxsModule.forRoot([
      VersionStateReducer
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),//Comment this before pushing to git
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
