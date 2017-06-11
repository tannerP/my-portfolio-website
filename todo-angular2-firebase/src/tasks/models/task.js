"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase/app");
var Task = (function () {
    function Task(title) {
        this.completed = false;
        this.createdAt = firebase.database.ServerValue.TIMESTAMP;
        this.title = title;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map