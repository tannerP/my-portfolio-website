"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/do");
require("rxjs/add/operator/take");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth-service");
var UnauthGuard = (function () {
    function UnauthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UnauthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.authenticated$
            .take(1)
            .do(function (authenticated) {
            if (authenticated) {
                _this.router.navigate(['/tasks']);
            }
        })
            .map(function (authenticated) { return !authenticated; });
    };
    return UnauthGuard;
}());
UnauthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], UnauthGuard);
exports.UnauthGuard = UnauthGuard;
var _a;
//# sourceMappingURL=unauth-guard.js.map