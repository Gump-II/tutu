"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var page_not_found_component_1 = require("./404/page-not-found.component");
var error_page_routing_module_1 = require("./error-page-routing.module");
var error_page_component_1 = require("./error-page.component");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ErrorPageModule = (function () {
    function ErrorPageModule() {
    }
    return ErrorPageModule;
}());
ErrorPageModule = __decorate([
    core_1.NgModule({
        imports: [error_page_routing_module_1.ErrorPageRoutingModule, common_1.CommonModule, router_1.RouterModule],
        exports: [error_page_component_1.ErrorPageComponent],
        declarations: [page_not_found_component_1.PageNotFoundComponent, error_page_component_1.ErrorPageComponent]
    })
], ErrorPageModule);
exports.ErrorPageModule = ErrorPageModule;
