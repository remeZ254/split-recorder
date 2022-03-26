import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectVideoSourceComponent } from './select-video-source.component';

@NgModule({
  declarations: [
    SelectVideoSourceComponent
  ],
  exports: [
    SelectVideoSourceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectVideoSourceModule {
}
