import { NgModule } from '@angular/core';
import { NgLib2Component } from './ng-lib2.component';
import {NgLib1Module} from 'ng-lib1';



@NgModule({
  declarations: [NgLib2Component],
  imports: [
    NgLib1Module
  ],
  exports: [NgLib2Component]
})
export class NgLib2Module { }
