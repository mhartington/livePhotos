import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import * as LivePhotosKit from 'livephotoskit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('livePhoto') livephoto: ElementRef
  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.platform.ready()
      .then(() => {
        const livePhoto = LivePhotosKit.Player(this.livephoto.nativeElement)
        livePhoto.photoSrc = 'assets/IMG_1693.JPG'
        livePhoto.videoSrc = 'assets/IMG_1693.mov'
        console.log(livePhoto)
      })
  }
}
