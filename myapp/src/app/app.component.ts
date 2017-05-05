import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navIsFixed = false;
  public  title = 'app works!';

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 120) {
      this.navIsFixed = true;
      console.log("number " + number);
    } else if (this.navIsFixed && number < 10) {
      console.log("number " + number);
      this.navIsFixed = false;
    }
  }
  log(event: any): void {
    console.log(this.document.body.scroll)
    console.log(event);
  }
}

