"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
describe('tasks/', function () {
    describe('Task', function () {
        it('should set title', function () {
            expect(new task_1.Task('test').title).toBe('test');
        });
        it('should set completed to false by default', function () {
            expect(new task_1.Task('test').completed).toBe(false);
        });
    });
});
//# sourceMappingURL=task.spec.js.map