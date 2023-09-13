import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent {
  styleist: string = "d-none justify-content-center align-items-center vh-100";
  posterpath: string = "assets/imges/poert1.png";
  showDiv: boolean = false;
  showImage(event:any) {
    if(event.target.tagName=="I"){
      this.posterpath=event.target.parentElement.previousSibling.src;
      this.showDiv = true;
    }
    if(event.target.previousSibling.tagName == "IMG")
    {
      this.posterpath=event.target.previousSibling.src;
      this.showDiv = true;
    }
  }
  hideImage(event:any):void {
    if(event.target.tagName != "IMG")
    this.showDiv = false;
  }
}
