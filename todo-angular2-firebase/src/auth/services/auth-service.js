"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_1 = require("angularfire2/auth");
var firebase = require("firebase/app");
var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.authenticated$ = afAuth.authState.map(function (user) { return !!user; });
        this.uid$ = afAuth.authState.map(function (user) { return user.uid; });
    }
    AuthService.prototype.signIn = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.afAuth.auth.signInAnonymously()
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.signIn(new firebase.auth.GithubAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(new firebase.auth.GoogleAuthProvider());
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.signIn(new firebase.auth.TwitterAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.signIn(new firebase.auth.FacebookAuthProvider());
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.AngularFireAuth !== "undefined" && auth_1.AngularFireAuth) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth-service.js.map