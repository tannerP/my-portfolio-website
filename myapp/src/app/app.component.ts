import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuStateService } from './services/menu-state.service';
import { IgService } from './services/ig.service';
import { DOCUMENT } from '@angular/platform-browser';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('socialmediaState', [
      state('true',   style({
         transform: 'translateY(-30px)',
         transition: '0.5s',
      })),
      state('false',   style({
        display: 'none',
        transform: 'translateY(30px)',
        // backgroundColor: 'blue',
  //      transform: 'translateY(100px)'
      })),
      transition('true => *', animate('1000ms ease-in')),
       transition('false => *', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  public socialmedia_state: Boolean;
  constructor(@Inject(DOCUMENT) private document: any, private menuSrvc: MenuStateService, private ig: IgService) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // let number = this.document.body.scrollTop;
    // if (number > 120) {
    //   this.navIsFixed = true;
    //   console.log("number " + number);
    // } else if (this.navIsFixed && number < 10) {
    //   console.log("number " + number);
    //   this.navIsFixed = false;
    // }
  }

  ngOnInit() {
   this.socialmedia_state = false;
  }
  toggle_socialMedia() {
    this.socialmedia_state = !this.socialmedia_state;
    console.log(this.socialmedia_state);
  }
}

