import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aperture:number;
  pixelPitch:number;
  focalLength:number;
  shutterTime:number;

  constructor() {

    // this.aperture = 1;
    // this.pixelPitch = 1;
    // this.focalLength  = 1;
    // this.shutterTime = 1;

  }

  calcTime(){
    console.log("huhu");
    console.log(this.aperture);
    console.log(this.pixelPitch);
    console.log(this.focalLength);

    //{(35 x Aperture) + (30 x pixel pitch)} ÷ focal length
    this.shutterTime = ((35 * this.aperture) + (30 * this.pixelPitch)) / this.focalLength
    
    console.log(this.shutterTime);
  }
}
