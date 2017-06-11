"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var auth_1 = require("angularfire2/auth");
var database_1 = require("angularfire2/database");
var firebaseConfig = {
    apiKey: 'AIzaSyDaEW83qAOozjJbbJP1YYbEHxxfFksdSHQ',
    authDomain: 'ng2-todo-app.firebaseapp.com',
    databaseURL: 'https://ng2-todo-app.firebaseio.com',
    storageBucket: 'ng2-todo-app.appspot.com'
};
var FirebaseModule = (function () {
    function FirebaseModule() {
    }
    return FirebaseModule;
}());
FirebaseModule = __decorate([
    core_1.NgModule({
        imports: [
            auth_1.AngularFireAuthModule,
            database_1.AngularFireDatabaseModule,
            angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, 'ng2-todo-app')
        ]
    })
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=index.js.map