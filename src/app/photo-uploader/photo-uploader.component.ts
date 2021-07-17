import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.css']
})
export class PhotoUploaderComponent implements OnInit {
  @Output() onBack = new EventEmitter<boolean>();
  @Output() imageCropped = new EventEmitter<boolean>();
  @Input() imageChangedEvent;
  loading = true;
  constructor() { }

  ngOnInit(): void {
  }

  imageLoaded() {

      // show cropper image: LoadedImage
  }
  cropperReady() {
    this.loading = false;
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
