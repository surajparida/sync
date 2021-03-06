"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../services/product.service");
var ProductComponent = (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.review = new core_1.EventEmitter();
        this.tab = 1;
    }
    ProductComponent.prototype.changeTab = function (tabIndex, event) {
        var _this = this;
        event.preventDefault();
        this._productService.gerReviews(this.product.id)
            .subscribe(function (resp) {
            _this.product.reviews = resp;
        });
        this.tab = tabIndex;
    };
    ProductComponent.prototype.isTabSelected = function (tabIndex) {
        return this.tab === tabIndex;
    };
    ProductComponent.prototype.submitNewReview = function (event, form, product) {
        event.preventDefault();
        this.review.emit({ review: form.value, product: product });
        form.reset();
    };
    ProductComponent.prototype.handleReviewDelete = function (reviewId, productId) {
        var _this = this;
        this._productService.deleteReview(reviewId, productId)
            .subscribe(function (resp) {
            _this.product.reviews = _this.product.reviews.filter(function (item) { return item.id !== reviewId; });
        });
    };
    return ProductComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProductComponent.prototype, "product", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProductComponent.prototype, "review", void 0);
ProductComponent = __decorate([
    core_1.Component({
        selector: 'shop-product',
        templateUrl: './product.component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
exports.default = ProductComponent;
//# sourceMappingURL=product.component.js.map