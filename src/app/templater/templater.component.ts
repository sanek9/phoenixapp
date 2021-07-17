import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-templater',
  templateUrl: './templater.component.html',
  styleUrls: ['./templater.component.css']
})
export class TemplaterComponent implements OnInit {
  @Input() imageSrc = "assets/no_avatar.png";
  waterLogoSrc = "assets/water-logo.png";
  @ViewChild('save')
  saveButton: ElementRef;
  @ViewChild('eldiv')
  eldiv: ElementRef;
  ready: boolean = false;
  dataURL;
  @Input() name: string;
  @Input() birth: string;
  @Input() text: string;
  @Input() address: string;
  @Input() clothes: string;
  @Input() signs: string;
  @Input() specialSigns: string;
  @Input() gender: string;
  @Output() onBack = new EventEmitter<boolean>();
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log("hello", this.eldiv.nativeElement);
    console.log()
    let imgCount = 0;

    document.querySelectorAll("img").forEach(img => {
      if (!img.complete){
        this.loading = true;
        imgCount++;
        img.addEventListener( 'load', () => {
          imgCount--;
          if (imgCount == 0){
            this.loading = false;
          }
        }, false );
      }
    });

    // setTimeout( () => {
    //   this.generate(); }
    //   , 10);
  }
  generate(button) {
    toPng(this.eldiv.nativeElement)
    .then((dataUrl) => {
      var img = new Image();
      img.src = dataUrl;
      this.dataURL = dataUrl;
      //this.saveButton._elementRef.nativeElement.href = dataUrl;
      console.log(dataUrl);
      console.log(this.saveButton);
      this.ready = true;
      console.log(button);
      button.href = dataUrl;
      button.click()

    //  document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  }
  click(element, button) {
    console.log("hello");
    console.log(element);
    toPng(element)
    .then((dataUrl) => {
      var img = new Image();
      img.src = dataUrl;
      this.dataURL = dataUrl;
      //this.saveButton._elementRef.nativeElement.href = dataUrl;
      console.log(dataUrl);
      console.log(this.saveButton);
      this.ready = true;
    //  document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  }

}
