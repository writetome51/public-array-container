"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var TestClass = /** @class */ (function (_super) {
    __extends(TestClass, _super);
    function TestClass(arr) {
        return _super.call(this, arr) || this;
    }
    TestClass.prototype.logClassNameAndReturnThis = function () {
        return this._returnThis_after(console.log(this.className));
    };
    return TestClass;
}(index_1.PublicArrayContainer));
var testObject = new TestClass(['b', 'c', 'd']);
var instance = testObject.logClassNameAndReturnThis();
// should log 'TestClass' to console.
if (instance.className && instance.className === 'TestClass')
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
console.log(instance.data);
