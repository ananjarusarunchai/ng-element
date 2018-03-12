import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.textdisplay === undefined) {
            this.textdisplay = 'Hello World';
        }
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: `
    <div class="life-container">
      {{textdisplay}}
    </div>
  `,
                styles: [`
    .life-container {
      background: #3FA0E1;
      padding: .5em;
      font-weight: bold;
      cursor: pointer; }
  `]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    'textdisplay': [{ type: Input },],
};

class HeaderModule {
}
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
HeaderModule.ctorParameters = () => [];

// tslint:disable-next-line:eofline

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=ng-element.js.map
