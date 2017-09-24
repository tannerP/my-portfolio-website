import {  HostListener, Component, Inject, OnInit } from '@angular/core';
import { MenuStateService } from '../services/menu-state.service';
import { IgService } from '../services/ig.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public menu_state: String;
  public menu_items = ['about', 'bio', 'people'];
  public bckgrnd_img_src = ['reads', '', 'photos', '',  'blog',  '', 'socials', '', 'portfolio'];
  private img_src = '../../assets/medias/me.jpg';
  constructor(@Inject(DOCUMENT) private document: any,
              private ig: IgService,
              private  router: Router,
              public menuService: MenuStateService) { }
  ngOnInit(): any {
    this.menu_state =  'about';
  }
  click_portfolio(): any {
    this.router.navigateByUrl('blog');
  }
  change_opacity( opa: number): any {
    // this.opacity = opa;? opa|.5;
  }
 setStyle(): any {
    let random: number;
    const url = ['../../assets/medias/me.jpg',
      '../../assets/medias/me.jpg',
      '../../assets/medias/me.jpg'];

    random = Math.floor(Math.random() * 3) ;
    const style = {
        'background-image': 'url(' + url[random] + ')',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'height': '100px',
    }
    return style;
  }
/*
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number: Number = this.document.body.scrollTop;
    console.log(number);
    console.log(this.document.body);
  }
*/

}
