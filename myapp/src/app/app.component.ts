import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuStateService } from './menu-state.service';
import { DOCUMENT } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  public menu_items = ['startup', 'software', 'people'];
  constructor(@Inject(DOCUMENT) private document: any, private menuSrvc: MenuStateService) { }
  public menu_state: String;
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
    this.menu_state =  'bio';
  }

  menu_onClick(event: any, item): void {
    console.log(this.menu_state);
    console.log(item);
    this.menuSrvc.setState(item);
    this.menu_state = this.menuSrvc.getState();
    return;
  }
  monolog_pane_showorhide(id): String {
      return id === this.menu_state ? '' : 'none';
  }
}

