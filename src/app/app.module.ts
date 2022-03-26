import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectVideoSourceModule } from "./features/select-video-source/select-video-source.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SelectVideoSourceModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
