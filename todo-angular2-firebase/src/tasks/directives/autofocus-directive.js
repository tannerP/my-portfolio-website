"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AutoFocusDirective = (function () {
    function AutoFocusDirective(element) {
        this.element = element;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        this.element.nativeElement.focus();
    };
    return AutoFocusDirective;
}());
AutoFocusDirective = __decorate([
    core_1.Directive({
        selector: '[autoFocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], AutoFocusDirective);
exports.AutoFocusDirective = AutoFocusDirective;
var _a;
//# sourceMappingURL=autofocus-directive.js.map