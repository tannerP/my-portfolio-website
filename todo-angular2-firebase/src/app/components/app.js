"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_1 = require("../../auth");
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        styles: [
            require('./app.scss')
        ],
        template: "\n    <app-header\n      [authenticated]=\"auth.authenticated$ | async\"\n      (signOut)=\"signOut()\"></app-header>\n\n    <main class=\"main\">\n      <router-outlet></router-outlet>\n    </main>\n  "
    }),
    __metadata("design:paramtypes", [auth_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map