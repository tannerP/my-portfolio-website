"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskItemComponent = (function () {
    function TaskItemComponent() {
        this.remove = new core_1.EventEmitter(false);
        this.update = new core_1.EventEmitter(false);
        this.editing = false;
        this.title = '';
    }
    TaskItemComponent.prototype.editTitle = function () {
        this.editing = true;
        this.title = this.task.title;
    };
    TaskItemComponent.prototype.saveTitle = function () {
        if (this.editing) {
            var title = this.title.trim();
            if (title.length && title !== this.task.title) {
                this.update.emit({ title: title });
            }
            this.stopEditing();
        }
    };
    TaskItemComponent.prototype.stopEditing = function () {
        this.editing = false;
    };
    TaskItemComponent.prototype.toggleStatus = function () {
        this.update.emit({
            completed: !this.task.completed
        });
    };
    return TaskItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskItemComponent.prototype, "task", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskItemComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskItemComponent.prototype, "update", void 0);
TaskItemComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'task-item',
        styles: [
            require('./task-item.scss')
        ],
        template: require('./task-item.html')
    })
], TaskItemComponent);
exports.TaskItemComponent = TaskItemComponent;
//# sourceMappingURL=task-item.js.map