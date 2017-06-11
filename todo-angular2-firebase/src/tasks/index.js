"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_1 = require("../auth");
var task_form_1 = require("./components/task-form");
var task_item_1 = require("./components/task-item");
var task_list_1 = require("./components/task-list");
var tasks_1 = require("./components/tasks");
var autofocus_directive_1 = require("./directives/autofocus-directive");
var task_service_1 = require("./services/task-service");
exports.TaskService = task_service_1.TaskService;
var routes = [
    { path: 'tasks', component: tasks_1.TasksComponent, canActivate: [auth_1.AuthGuard] }
];
var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    core_1.NgModule({
        declarations: [
            autofocus_directive_1.AutoFocusDirective,
            task_form_1.TaskFormComponent,
            task_item_1.TaskItemComponent,
            task_list_1.TaskListComponent,
            tasks_1.TasksComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes)
        ],
        providers: [
            task_service_1.TaskService
        ]
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=index.js.map