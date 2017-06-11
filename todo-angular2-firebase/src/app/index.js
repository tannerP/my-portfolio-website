"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var auth_1 = require("../auth");
var firebase_1 = require("../firebase");
var tasks_1 = require("../tasks");
var app_1 = require("./components/app");
var app_header_1 = require("./components/app-header");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_1.AppComponent
        ],
        declarations: [
            app_1.AppComponent,
            app_header_1.AppHeaderComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([], { useHash: false }),
            auth_1.AuthModule,
            firebase_1.FirebaseModule,
            tasks_1.TasksModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map