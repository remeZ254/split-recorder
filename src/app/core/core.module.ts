import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronService } from "./services/electron/electron.service";

@NgModule({
  declarations: [],
  providers: [
    ElectronService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
