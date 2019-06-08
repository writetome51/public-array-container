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
var error_if_not_array_1 = require("error-if-not-array");
var base_class_1 = require("@writetome51/base-class");
var PublicArrayContainer = /** @class */ (function (_super) {
    __extends(PublicArrayContainer, _super);
    function PublicArrayContainer(__data) {
        if (__data === void 0) { __data = []; }
        var _this = _super.call(this) || this;
        _this.__data = __data;
        error_if_not_array_1.errorIfNotArray(_this.__data);
        return _this;
    }
    Object.defineProperty(PublicArrayContainer.prototype, "data", {
        get: function () {
            return this.__data;
        },
        set: function (value) {
            error_if_not_array_1.errorIfNotArray(value);
            this.__data = value;
        },
        enumerable: true,
        configurable: true
    });
    return PublicArrayContainer;
}(base_class_1.BaseClass));
exports.PublicArrayContainer = PublicArrayContainer;
