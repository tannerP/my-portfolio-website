import { Component } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `<div class='background'></div>
            <div class="menu_btn">
              <img src="app/medias/me.jpg">
            </div>
             <div class='slide ' id='slide_two'>
               <menu class='main_menu'>
               <span class="menu_title"> M E N U</span>
                <ul> 
                  <li> People </li>
                  <li> Software </li>
                  <li> Startup </li>
                </ul>
               </menu>
             </div>
            <div class='button' (click)='onClick()'> 
              <h1> Portfolio</h1>
            </div>
            <!--<button (click)='onClick()'> Click me!</button>-->
            <div class='slide' id='slide_two'> my div </div>

            <button (click)='onClick()'> Click me!</button>
            <div class='slide' id='slide_three'> my div </div>
  `,
  styleUrls: ['../../../../my_site/site/src/app/app.component.css'],
  // animations: [
  //   trigger('heroState', [
  //     state('out', style({
  //       // transform: 'translate3d(0, 0, 0)'
  //       transform: 'skew(50deg)'
  //     })),
  //     state('in', style({
  //       // transform: 'translate3d(100%, 0, 0)'
  //       transform: 'translate(-50px)'
  //     })),
  //     transition('in => out', animate('800ms ease-in-out')),
  //     transition('out => in', animate('800ms ease-in-out'))
  //   ]),
  // ]
  animations: [
    trigger('heroState', [
      state('in', style({transform: 'translateX(0)'})),
      transition('in => out', [
        animate(800, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.8}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 5})
        ]))
      ]),
      transition('out => in', [
        animate(800, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]

})

export class AppComponent {
    name = 'Tanner';
    pressed = 'out';
    onClick() {
      if (this.pressed === 'in') {
          this.pressed = 'out';
        }else {
        this.pressed = 'in';
      }
    }
  }
