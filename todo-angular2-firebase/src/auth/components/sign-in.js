"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth-service");
var SignInComponent = (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SignInComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.signInAnonymously()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.signInWithGithub()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.signInWithTwitter()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.postSignIn = function () {
        this.router.navigate(['/tasks']);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        styles: [
            require('./sign-in.scss')
        ],
        template: "\n    <div class=\"g-row sign-in\">\n      <div class=\"g-col\">\n        <h1 class=\"sign-in__heading\">Sign in</h1>\n        <button class=\"sign-in__button\" (click)=\"signInAnonymously()\" type=\"button\">Anonymously</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithGithub()\" type=\"button\">GitHub</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithGoogle()\" type=\"button\">Google</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithTwitter()\" type=\"button\">Twitter</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithFacebook()\" type=\"button\">Facebook</button>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], SignInComponent);
exports.SignInComponent = SignInComponent;
var _a;
//# sourceMappingURL=sign-in.js.map