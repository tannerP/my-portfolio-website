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
    trigger('menu_state_text_content', [
      state('main', style({
        backgroundColor: 'darkorange'
      })),
      state('startup',   style({
        backgroundColor: 'darkorange',
        transform: 'translateY(100px)'
      })),
      state('software',   style({
        backgroundColor: 'darkorange',
        transform: 'scale(1.1)'
      })),
      state('people',   style({

        transform: 'translateY(100px)'
      })),
      state('*', style({
        display: 'none'
      })),
      transition('void => *', animate('1000ms ease-in')),
       transition('* => void', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  public menu_items = ['people', 'startup', 'work'];
  public bckgrnd_img_src = ['portfolio', '', 'bio', '', 'blog',  '',
    'Photography', '', 'design'];
  public menu_state: String;
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
    this.menu_state =  'about';
  }

}

