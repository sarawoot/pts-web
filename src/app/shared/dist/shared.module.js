"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var breadcrumb_component_1 = require("./components/breadcrumb/breadcrumb.component");
var feather_icons_component_1 = require("./components/feather-icons/feather-icons.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var content_layout_component_1 = require("./components/layout/content-layout/content-layout.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
// Directives
var fullscreen_directive_1 = require("./directives/fullscreen.directive");
// services
var nav_service_1 = require("./services/nav.service");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent, footer_component_1.FooterComponent, sidebar_component_1.SidebarComponent, content_layout_component_1.ContentLayoutComponent,
                feather_icons_component_1.FeatherIconsComponent, breadcrumb_component_1.BreadcrumbComponent, fullscreen_directive_1.ToggleFullscreenDirective
            ],
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
            exports: [
                feather_icons_component_1.FeatherIconsComponent,
            ],
            providers: [nav_service_1.NavService]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
