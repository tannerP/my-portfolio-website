"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("angularfire2/database");
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.remove = new core_1.EventEmitter(false);
        this.update = new core_1.EventEmitter(false);
    }
    return TaskListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "filter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof database_1.FirebaseListObservable !== "undefined" && database_1.FirebaseListObservable) === "function" && _a || Object)
], TaskListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskListComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskListComponent.prototype, "update", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'task-list',
        styles: [
            require('./task-list.scss')
        ],
        template: "\n    <ul class=\"task-filters\">\n      <li><a [class.active]=\"!filter\" [routerLink]=\"['/tasks']\">View All</a></li>\n      <li><a [class.active]=\"filter === 'false'\" [routerLink]=\"['/tasks', {completed: false}]\">Active</a></li>\n      <li><a [class.active]=\"filter === 'true'\" [routerLink]=\"['/tasks', {completed: true}]\">Completed</a></li>\n    </ul>\n    \n    <div class=\"task-list\">\n      <task-item\n        *ngFor=\"let task of tasks | async\"\n        [task]=\"task\"\n        (remove)=\"remove.emit(task)\"\n        (update)=\"update.emit({task: task, changes: $event})\"></task-item>\n    </div>\n  "
    })
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
var _a;
//# sourceMappingURL=task-list.js.map