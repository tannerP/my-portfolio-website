"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/merge");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var database_1 = require("angularfire2/database");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var auth_1 = require("../../auth");
var task_1 = require("../models/task");
var TaskService = (function () {
    function TaskService(afDb, auth) {
        var _this = this;
        this.filter$ = new ReplaySubject_1.ReplaySubject(1);
        auth.uid$
            .take(1)
            .subscribe(function (uid) {
            var path = "/tasks/" + uid;
            _this.tasks$ = afDb.list(path);
            _this.filteredTasks$ = afDb.list(path, { query: {
                    orderByChild: 'completed',
                    equalTo: _this.filter$
                } });
            _this.visibleTasks$ = _this.filter$
                .switchMap(function (filter) { return filter === null ? _this.tasks$ : _this.filteredTasks$; });
        });
    }
    TaskService.prototype.filterTasks = function (filter) {
        switch (filter) {
            case 'false':
                this.filter$.next(false);
                break;
            case 'true':
                this.filter$.next(true);
                break;
            default:
                this.filter$.next(null);
                break;
        }
    };
    TaskService.prototype.createTask = function (title) {
        return this.tasks$.push(new task_1.Task(title));
    };
    TaskService.prototype.removeTask = function (task) {
        return this.tasks$.remove(task.$key);
    };
    TaskService.prototype.updateTask = function (task, changes) {
        return this.tasks$.update(task.$key, changes);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object, auth_1.AuthService])
], TaskService);
exports.TaskService = TaskService;
var _a;
//# sourceMappingURL=task-service.js.map