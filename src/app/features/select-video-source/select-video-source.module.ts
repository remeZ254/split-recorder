import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from "@angular/material/select";

import { SelectVideoSourceComponent } from './select-video-source.component';

@NgModule({
  declarations: [
    SelectVideoSourceComponent
  ],
  exports: [
    SelectVideoSourceComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ]
})
export class SelectVideoSourceModule {
}
