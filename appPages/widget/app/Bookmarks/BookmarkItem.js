/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/core/Accessor", "esri/geometry/Extent"], function (require, exports, __extends, __decorate, decorators_1, Accessor, Extent) {
    "use strict";
    var BookmarkItem = /** @class */ (function (_super) {
        __extends(BookmarkItem, _super);
        function BookmarkItem() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //----------------------------------
            //  active
            //----------------------------------
            _this.active = false;
            //----------------------------------
            //  extent
            //----------------------------------
            _this.extent = null;
            //----------------------------------
            //  name
            //----------------------------------
            _this.name = null;
            return _this;
        }
        __decorate([
            decorators_1.property()
        ], BookmarkItem.prototype, "active", void 0);
        __decorate([
            decorators_1.property({
                type: Extent
            })
        ], BookmarkItem.prototype, "extent", void 0);
        __decorate([
            decorators_1.property()
        ], BookmarkItem.prototype, "name", void 0);
        BookmarkItem = __decorate([
            decorators_1.subclass("demo.BookmarkItem")
        ], BookmarkItem);
        return BookmarkItem;
    }(decorators_1.declared(Accessor)));
    return BookmarkItem;
});
//# sourceMappingURL=BookmarkItem.js.map