"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Tanner';
        this.pressed = 'out';
    }
    AppComponent.prototype.onClick = function () {
        if (this.pressed === 'in') {
            this.pressed = 'out';
        }
        else {
            this.pressed = 'in';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class='background'></div>\n            <div class=\"menu_btn\">\n              <img src=\"app/medias/me.jpg\">\n            </div>\n             <div class='slide ' id='slide_two'>\n               <menu class='main_menu'>\n               <span class=\"menu_title\"> M E N U</span>\n                <ul> \n                  <li> People </li>\n                  <li> Software </li>\n                  <li> Startup </li>\n                </ul>\n               </menu>\n             </div>\n            <div class='button' (click)='onClick()'> \n              <h1> Portfolio</h1>\n            </div>\n            <!--<button (click)='onClick()'> Click me!</button>-->\n            <div class='slide' id='slide_two'> my div </div>\n\n            <button (click)='onClick()'> Click me!</button>\n            <div class='slide' id='slide_three'> my div </div>\n  ",
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
            animations_1.trigger('heroState', [
                animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                animations_1.transition('in => out', [
                    animations_1.animate(800, animations_1.keyframes([
                        animations_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        animations_1.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
                        animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 5 })
                    ]))
                ]),
                animations_1.transition('out => in', [
                    animations_1.animate(800, animations_1.keyframes([
                        animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        animations_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        animations_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map