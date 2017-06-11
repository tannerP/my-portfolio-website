"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sign_in_1 = require("./components/sign-in");
var auth_guard_1 = require("./guards/auth-guard");
exports.AuthGuard = auth_guard_1.AuthGuard;
var unauth_guard_1 = require("./guards/unauth-guard");
exports.UnauthGuard = unauth_guard_1.UnauthGuard;
var auth_service_1 = require("./services/auth-service");
exports.AuthService = auth_service_1.AuthService;
var routes = [
    { path: '', component: sign_in_1.SignInComponent, canActivate: [unauth_guard_1.UnauthGuard] }
];
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        declarations: [
            sign_in_1.SignInComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ],
        providers: [
            auth_guard_1.AuthGuard,
            auth_service_1.AuthService,
            unauth_guard_1.UnauthGuard
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=index.js.map