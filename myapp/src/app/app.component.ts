import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuStateService } from './services/menu-state.service';
import { IgService } from './services/ig.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('socialmediaState', [
      state('true',   style({
         transform: 'translateY(-40px)',
      })),
      state('false',   style({
        display: 'none',
        transform: 'translateY(4px)',
      })),
      transition('true => *', animate('1000ms ease-in')),
      transition('false => *', animate('1000ms ease-out')),
      transition('void => *', animate('1000ms ease-out')),
    ])
  ]
})
export class AppComponent {
  public socialmedia_state: Boolean = false;
  public footer_tog: Boolean = false;
  private current_scroll = Number;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private menuSrvc: MenuStateService, private ig: IgService) {
    setInterval(() => {
      console.log('Reset');
      this.footer_tog = !this.footer_tog;
    }, 1000 * 4);
  };

  isMoving(scroll_index) {
    if (this.current_scroll === scroll_index) {
      return false;
    }
    return true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number: Number = this.document.body.scrollTop;
    console.log(number);
  }
}
