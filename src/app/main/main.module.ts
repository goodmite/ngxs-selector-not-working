import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/bootloader';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }



