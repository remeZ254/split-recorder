import { Component } from '@angular/core';
import { DesktopCapturerSource } from "electron";
import { from, Observable } from "rxjs";

import { ElectronService } from "../../core/services/electron/electron.service";

@Component({
  selector: 'app-select-video-source',
  templateUrl: './select-video-source.component.html',
  styleUrls: ['./select-video-source.component.less']
})
export class SelectVideoSourceComponent {
  mediaStream$: Observable<MediaStream>;
  videoSources$: Observable<DesktopCapturerSource[]>;

  constructor(private electronService: ElectronService) {
    this.mediaStream$ = new Observable<MediaStream>();
    this.videoSources$ = this.electronService.getVideoSources$();
  }

  streamSource(source: DesktopCapturerSource) {
    this.mediaStream$ = from(navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: source.id
        }
      }
    } as any));
  }
}
