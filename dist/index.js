"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var BatchGetterSetter_1 = require("batch-getter-setter/BatchGetterSetter");
var PublicArrayContainer = /** @class */ (function (_super) {
    __extends(PublicArrayContainer, _super);
    function PublicArrayContainer(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        errorIfNotArray_1.errorIfNotArray(_this._data);
        return _this;
    }
    Object.defineProperty(PublicArrayContainer.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            errorIfNotArray_1.errorIfNotArray(value);
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    return PublicArrayContainer;
}(BatchGetterSetter_1.BatchGetterSetter));
exports.PublicArrayContainer = PublicArrayContainer;
