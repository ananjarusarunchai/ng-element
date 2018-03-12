import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.textdisplay === undefined) {
            this.textdisplay = 'Hello World';
        }
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "\n    <div class=\"life-container\">\n      {{textdisplay}}\n    </div>\n  ",
                styles: ["\n    .life-container {\n      background: #3FA0E1;\n      padding: .5em;\n      font-weight: bold;\n      cursor: pointer; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
HeaderComponent.propDecorators = {
    'textdisplay': [{ type: Input },],
};
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [
                    HeaderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
HeaderModule.ctorParameters = function () { return []; };
// tslint:disable-next-line:eofline
/**
 * Generated bundle index. Do not edit.
 */
export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=ng-element.es5.js.map
