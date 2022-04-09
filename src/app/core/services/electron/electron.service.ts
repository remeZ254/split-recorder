import { Injectable } from '@angular/core';
import { ElectronService as NgxElectron } from "ngx-electron";
import { from, Observable } from "rxjs";

@Injectable()
export class ElectronService {

  constructor(private ngxElectron: NgxElectron) {
  }

  getVideoSources$(): Observable<Electron.DesktopCapturerSource[]> {
    return from(this.ngxElectron.desktopCapturer.getSources({ types: ['window', 'screen'] }));
  }

}
