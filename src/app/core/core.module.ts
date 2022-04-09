import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxElectronModule } from 'ngx-electron';

import { ElectronService } from "./services/electron/electron.service";

@NgModule({
  declarations: [],
  providers: [
    ElectronService
  ],
  imports: [
    CommonModule,
    NgxElectronModule
  ]
})
export class CoreModule {
}
