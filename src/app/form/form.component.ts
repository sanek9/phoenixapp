import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, LoadedImage, ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ready = false;
  state = "form";
  selected = "personal";


  name: string;
  text: string;
  birth: string;
  address: string;
  clothes: string;
  signs: string;
  specialSigns: string;
  gender: string;
  constructor() { }
  imageChangedEvent: any = '';
  croppedImage: any = "assets/no_avatar.png";
  cropper = {x1: 0, y1: 0, x2: 0, y2: 0};
  oldcropper = {x1: 0, y1: 0, x2: 0, y2: 0};
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      this.state = 'photo';
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      console.log("imageCropped cropper", event.cropperPosition);
      // setTimeout( ()=>{this.cropper = event.cropperPosition;}, 0);
  }
  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(this.selected);
  }
}
