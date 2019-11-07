(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar *ngIf=\"authService.loggedIn() ; else elseBlock\" class=\"navbar-vertical navbar-expand-md fixed-left\"></app-nav-bar>\n<div *ngIf=\"authService.loggedIn()\" class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n      <span class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\">{{pageName}}</span>\n\n    </div>\n  </nav>\n  <div class=\"header pt-5\"></div>\n  <router-outlet style=\"display: none\"></router-outlet>\n\n\n</div>\n\n\n\n\n\n<ng-template #elseBlock>\n  <router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n  <div class=\"nav-wrapper container\">\n    <a [routerLink]=\"['/map']\" class=\"brand-logo\"> Give My Space </a>\n    <a (click)=\"onShowSideBar()\" data-target=\"#mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/map']\" routerLinkActive=\"active\">Map</a></li>\n      <li><a [routerLink]=\"['/trackers']\" routerLinkActive=\"active\">Trackers</a></li>\n      <li><a (click)=\"logOut()\" class=\"waves-effect waves-light btn\">Logout</a></li>\n    </ul>\n  </div>\n</!-->\n\n<!-- <ul [style.transform]=\"showSideBar? 'translateX(0%)' : 'translateX(-105%)'\" class=\"sidenav\" id=\"mobile-demo\">\n  <li><a (click)=\"onCloseSideBar()\" class=\"waves-effect waves-dark btn red\" >Back</a></li>\n  <li><a [routerLink]=\"['/map']\" routerLinkActive=\"active\">Map</a></li>\n  <li><a [routerLink]=\"['/trackers']\" routerLinkActive=\"active\">Trackers</a></li>\n  <li><a (click)=\"logOut()\" class=\"waves-effect waves-light btn\">Logout</a></li>\n</!-->\n\n\n<nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n    <div class=\"container-fluid\">\n      <!-- Toggler -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\" aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!-- Brand -->\n      <a [routerLink]=\"['/map']\" class=\"navbar-brand pt-0\">\n        <img src=\"./assets/img/brand/blue.png\" class=\"navbar-brand-img\" alt=\"...\">\n      </a>\n\n      <!-- Collapse -->\n      <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"./index.html\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\" aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- Navigation -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/map']\" class=\"nav-link \">\n              <i class=\"ni ni-pin-3 text-orange\"></i> Map\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/trackers']\" class=\"nav-link \">\n              <i class=\"ni ni-bullet-list-67 text-red\"></i> Trackers\n            </a>\n          </li>\n        </ul>\n\n        <!-- Divider -->\n        <hr class=\"my-3\">\n        <ul class=\"navbar-nav mb-md-3\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-light btn btn-danger\">\n                <i class=\"ni ni-user-run\"></i> Logout\n              </a>\n        </ul>\n\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <!-- Header -->\n  <div class=\"header bg-gradient-primary py-7 py-lg-8\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-7\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6\">\n            <!-- <h1 class=\"text-white\">Welcome!</h1>\n            <p class=\"text-lead text-light\">Login or create a user to track your devices</p> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <!-- Page content -->\n  <div class=\"container mt--8 pb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-secondary shadow border-0\">\n          <div class=\"card-header bg-transparent pb-5\">\n            <!-- <div class=\"text-muted text-center mt-2 mb-3\">\n              <small>Sign in with</small>\n            </div>\n            <div class=\"btn-wrapper text-center\">\n              <a href=\"#\" class=\"btn btn-neutral btn-icon\">\n                <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\n                <span class=\"btn-inner--text\">Github</span>\n              </a>\n              <a href=\"#\" class=\"btn btn-neutral btn-icon\">\n                <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n                <span class=\"btn-inner--text\">Google</span>\n              </a>\n            </div> -->\n          </div>\n          <div class=\"card-body px-lg-5 py-lg-5\">\n            <div class=\"text-center text-muted mb-4\">\n              <!-- <small>Or sign in with credentials</small> -->\n              <small>Sign in</small>\n            </div>\n            <div role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                  </div>\n                  <input [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\n                </div>\n              </div>\n              <!-- <span class=\"text-danger mr-2\"></span> -->\n              <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                  <span class=\"text-muted\">Remember me</span>\n                </label>\n              </div>\n              <div class=\"text-center text-muted mb-4\">\n                <!-- <small>Or sign in with credentials</small> -->\n                <small class=\"text-danger mr-2\">{{message}}</small>\n              </div>\n              <div class=\"text-center\">\n                <button (click)=\"onLoginSubmit()\"  type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-6\">\n            <a href=\"#\" class=\"text-light\"><small>Forgot password?</small></a>\n          </div>\n          <div class=\"col-6 text-right\">\n            <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            © 2018 <a href=\"https://www.creative-tim.com\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n          </div>\n        </div>\n        <!-- <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a href=\"https://www.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link\" target=\"_blank\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"http://blog.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Blog</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div> -->\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/map/map.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/map/map.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-0 mr-0\">\n  <div class=\"col\">\n    <div style=\"height: 300px;\"\n      leaflet\n      [leafletOptions]=\"options\"\n      [leafletLayersControl]=\"layersControl\"\n      [leafletLayers]=\"layers\"\n      [(leafletCenter)]=\"mapCenter\">\n    </div>\n    <!-- <div *ngIf=\"showLayer\" [leafletLayer]=\"layer\"></div> -->\n    <a (click)=\"sendMessage()\" class=\"btn btn-info\"> TEST</a>\n    <a (click)=\"trackMe()\" class=\"btn btn-danger\"> Track : {{isTracking}}</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n\n  <!-- Header -->\n  <div class=\"header bg-gradient-primary py-7 py-lg-8\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-7\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6\">\n            <!-- <h1 class=\"text-white\">Welcome!</h1>\n            <p class=\"text-lead text-light\">Login or create a user to track your devices</p> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <!-- Page content -->\n  <div class=\"container mt--8 pb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-secondary shadow border-0\">\n          <div class=\"card-header bg-transparent pb-5\">\n            <!-- <div class=\"text-muted text-center mt-2 mb-3\">\n              <small>Sign in with</small>\n            </div>\n            <div class=\"btn-wrapper text-center\">\n              <a href=\"#\" class=\"btn btn-neutral btn-icon\">\n                <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\n                <span class=\"btn-inner--text\">Github</span>\n              </a>\n              <a href=\"#\" class=\"btn btn-neutral btn-icon\">\n                <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n                <span class=\"btn-inner--text\">Google</span>\n              </a>\n            </div> -->\n          </div>\n          <div class=\"card-body px-lg-5 py-lg-5\">\n            <div class=\"text-center text-muted mb-4\">\n              <!-- <small>Or sign in with credentials</small> -->\n              <small>Sign up</small>\n            </div>\n            <div role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                  </div>\n                  <input [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\n                </div>\n              </div>\n              <!-- <span class=\"text-danger mr-2\"></span> -->\n              <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                  <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                </label>\n              </div>\n              <div class=\"text-center text-muted mb-4\">\n                  <!-- <small>Or sign in with credentials</small> -->\n                  <small class=\"text-danger mr-2\">{{message}}</small>\n                </div>\n              <div class=\"text-center\">\n                <button (click)=\"onRegisterSubmit()\"  type=\"button\" class=\"btn btn-primary my-4\">Create account</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-12\">\n              <a [routerLink]=\"['/login']\" class=\"text-light\"><small>Login</small></a>\n            <!-- <small href=\"#\" class=\"text-light\"><small>Forgot password?</small></a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            © 2018 <a href=\"https://www.creative-tim.com\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n          </div>\n        </div>\n        <!-- <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a href=\"https://www.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link\" target=\"_blank\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"http://blog.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Blog</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div> -->\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/tracker-add/tracker-add.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/tracker-add/tracker-add.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tracker-add works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/tracker-list/tracker-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/tracker-list/tracker-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-0 mr-0\">\n  <div class=\"col\">\n    <div class=\"card shadow\">\n      <div class=\"card-header border-0\">\n        <h3 class=\"mb-0\">Trackers</h3>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table align-items-center table-flush\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Tracker Name</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                tracker_1\n              </td>\n\n              <td class=\"text-right\">\n                <a class=\"btn text-light btn-danger\">Delete</a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-footer py-4\">\n        <!-- <nav aria-label=\"...\">\n          <ul class=\"pagination justify-content-end mb-0\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                <i class=\"fas fa-angle-left\"></i>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">\n                <i class=\"fas fa-angle-right\"></i>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n          </ul>\n        </nav> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/tracker/tracker.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/tracker/tracker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tracker works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/map/map.component */ "./src/app/views/map/map.component.ts");
/* harmony import */ var _views_tracker_list_tracker_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/tracker-list/tracker-list.component */ "./src/app/views/tracker-list/tracker-list.component.ts");
/* harmony import */ var _views_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/tracker/tracker.component */ "./src/app/views/tracker/tracker.component.ts");
/* harmony import */ var _views_tracker_add_tracker_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/tracker-add/tracker-add.component */ "./src/app/views/tracker-add/tracker-add.component.ts");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "./src/app/views/page-not-found/page-not-found.component.ts");











const routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: _views_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'trackers', component: _views_tracker_list_tracker_list_component__WEBPACK_IMPORTED_MODULE_7__["TrackerListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'trackers/:id', component: _views_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_8__["TrackerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'tracker_add', component: _views_tracker_add_tracker_add_component__WEBPACK_IMPORTED_MODULE_9__["TrackerAddComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: '**', component: _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.pageName = 'Give My Space';
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/map/map.component */ "./src/app/views/map/map.component.ts");
/* harmony import */ var _views_tracker_list_tracker_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/tracker-list/tracker-list.component */ "./src/app/views/tracker-list/tracker-list.component.ts");
/* harmony import */ var _views_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/tracker/tracker.component */ "./src/app/views/tracker/tracker.component.ts");
/* harmony import */ var _views_tracker_add_tracker_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/tracker-add/tracker-add.component */ "./src/app/views/tracker-add/tracker-add.component.ts");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "./src/app/views/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _views_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
            _views_tracker_list_tracker_list_component__WEBPACK_IMPORTED_MODULE_13__["TrackerListComponent"],
            _views_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_14__["TrackerComponent"],
            _views_tracker_add_tracker_add_component__WEBPACK_IMPORTED_MODULE_15__["TrackerAddComponent"],
            _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletModule"].forRoot()
        ],
        providers: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavBarComponent = class NavBarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.showSideBar = false;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
    }
    onShowSideBar() {
        this.showSideBar = true;
    }
    onCloseSideBar() {
        this.showSideBar = false;
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            return true; // comment this
            this.router.navigate(['/login']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





// @Injectable()
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    loggedIn() {
        const browserToken = localStorage.getItem('id_token');
        if (this.authToken === null) {
            return false; // change to false
        }
        if (!browserToken) {
            return false; // change to false
        }
        if (browserToken === this.authToken) {
            return true;
        }
        return false; // change to false
    }
    authenticateUser(user) {
        const url = this.baseUrl + '/login/';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, user, { headers });
    }
    storeUserData(token, username) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('username', JSON.stringify(username));
        this.authToken = token;
        this.username = username;
    }
    logout() {
        this.authToken = null;
        this.username = null;
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/tracker.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tracker.service.ts ***!
  \*********************************************/
/*! exports provided: TrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerService", function() { return TrackerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-socket.service */ "./src/app/services/web-socket.service.ts");




let TrackerService = class TrackerService {
    // messages: Subject<any>;
    constructor(http, webSocketService) {
        // this.messages = <Subject<any>>webSocketService.connect()
        this.http = http;
        this.webSocketService = webSocketService;
    }
    sendSettings(settings) {
        // this.webSocketService.getSubject().next(settings);
    }
};
TrackerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"] }
];
TrackerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TrackerService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.url = this.baseURL + '/students/';
    }
    addUser(user) {
        const browserToken = sessionStorage.getItem('id_token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('id_token', browserToken);
        headers.append('Content-Type', 'application/json');
        const url = this.baseURL + '/users/register/';
        return this.http.post(url, user, { headers });
    }
    getTrackers(username) {
        const browserToken = sessionStorage.getItem('id_token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('id_token', browserToken);
        headers.append('Content-Type', 'application/json');
        const url = this.baseURL + '/users/trackers/' + username;
        return this.http.get(url, { headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





// import { Socket } from 'socket.io';
let WebSocketService = class WebSocketService {
    constructor() { }
    connect(username) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ws_url + '/webapp_io';
        // const url = environment.ws_url;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(url, {
            query: {
                username
            }
        });
        this.socket.on('connect', (error) => {
            console.log('Connected to ' + url);
        });
        this.socket.on('reconnect_attempt', () => {
            console.log('Reconnecting ' + url);
            this.socket.io.opts.query = {
                username
            };
        });
        this.socket.on('connect_error', (error) => {
            console.log('Connection Error ' + url);
        });
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        this.webSocketObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((subscriber) => {
            this.socket.on('message', (data) => {
                console.log("Received message from Websocket Server");
                subscriber.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return this.webSocketObservable;
    }
    disconnect() {
        // this.socketSubject.next(2);
        // this.socket.disconnect();
    }
    sendUpdates(updates) {
        this.socket.emit('settings update', JSON.stringify(updates));
        this.socket.emit('tracker update', JSON.stringify(updates));
    }
    getWebSocketObservable() {
        return this.webSocketObservable;
    }
};
WebSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebSocketService);



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            id: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe((response) => {
            if (response.success) {
                this.authService.storeUserData(response.token, response.User._id);
                this.message = '';
                this.router.navigate(['map']);
            }
            else {
                this.message = response.message;
            }
        }, (error) => {
            this.message = error.name;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/views/map/map.component.css":
/*!*********************************************!*\
  !*** ./src/app/views/map/map.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/views/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tracker.service */ "./src/app/services/tracker.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);







// host: {
//   class:'container-fluid'
// },
let MapComponent = class MapComponent {
    constructor(userService, authService, trackerService, webSocketService) {
        this.userService = userService;
        this.authService = authService;
        this.trackerService = trackerService;
        this.webSocketService = webSocketService;
        this.pageName = 'Map';
        this.renderMap = true;
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 14,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["latLng"])(46.879966, -121.726909)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Open Cycle Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["tileLayer"])('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            },
            overlays: {
                'Big Circle': Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["circle"])([46.95, -122], { radius: 5000 }),
                'Big Square': Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["polygon"])([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
            }
        };
        this.layers = [];
        this.mapCenter = Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["latLng"])(46.879966, -121.726909);
        this.isTracking = false;
        this.trackingID = 0;
        this.myLocation = { postion: [46.879966, -121.726909],
            radius: 200 };
    }
    ngOnInit() {
        this.webSocketService.connect(this.authService.username).subscribe((data) => {
            console.log(data);
        });
        this.findMe();
        this.renderMap = true;
    }
    ngOnDestroy() {
        this.webSocketService.disconnect();
    }
    sendMessage() {
        this.layers.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["marker"])([46.979966, -121.726909]));
        this.layers.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["circle"])([46.95, -122], { radius: 5000 }));
        this.layers.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["polygon"])([[46.8, -121.85], [46.92, -121.92], [46.87, -121.8]]));
        // this.webSocketService.sendUpdates("settings");
    }
    setLayers() {
        this.layers = [Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["circle"])([this.myLocation.postion[0], this.myLocation.postion[1]], this.myLocation.radius, { color: "red" })];
    }
    trackMe() {
        if (this.isTracking) {
            navigator.geolocation.clearWatch(this.trackingID);
            this.isTracking = false;
            // alert("Stop traing my postion")
        }
        else {
            if (navigator.geolocation) {
                this.isTracking = true;
                this.trackingID = navigator.geolocation.watchPosition((position) => {
                    this.mapCenter = Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["latLng"])(position.coords.latitude, position.coords.longitude);
                    this.myLocation.postion = [position.coords.latitude, position.coords.longitude];
                    this.myLocation.radius = position.coords.accuracy;
                    this.setLayers();
                });
                // alert("Start traing my postion")
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        }
    }
    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.mapCenter = Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["latLng"])(position.coords.latitude, position.coords.longitude);
                this.myLocation.postion = [position.coords.latitude, position.coords.longitude];
                this.myLocation.radius = position.coords.accuracy;
                this.setLayers();
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_4__["TrackerService"] },
    { type: _services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/views/map/map.component.css")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/views/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/views/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/views/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.userService.addUser(user).subscribe((response) => {
            if (response.success) {
                // this.authService.storeUserData(response.token, data.student)
                this.message = '';
                this.router.navigate(['map']);
            }
            else {
                this.message = response.message;
            }
        }, (error) => {
            this.message = error.name;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/views/tracker-add/tracker-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/tracker-add/tracker-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYWNrZXItYWRkL3RyYWNrZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/tracker-add/tracker-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/tracker-add/tracker-add.component.ts ***!
  \************************************************************/
/*! exports provided: TrackerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerAddComponent", function() { return TrackerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackerAddComponent = class TrackerAddComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrackerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracker-add',
        template: __webpack_require__(/*! raw-loader!./tracker-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/tracker-add/tracker-add.component.html"),
        styles: [__webpack_require__(/*! ./tracker-add.component.css */ "./src/app/views/tracker-add/tracker-add.component.css")]
    })
], TrackerAddComponent);



/***/ }),

/***/ "./src/app/views/tracker-list/tracker-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/tracker-list/tracker-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYWNrZXItbGlzdC90cmFja2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/tracker-list/tracker-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/tracker-list/tracker-list.component.ts ***!
  \**************************************************************/
/*! exports provided: TrackerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerListComponent", function() { return TrackerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let TrackerListComponent = class TrackerListComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.pageName = 'Trackers';
    }
    ngOnInit() {
        this.userService.getTrackers(this.authService.username).subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
};
TrackerListComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TrackerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracker-list',
        template: __webpack_require__(/*! raw-loader!./tracker-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/tracker-list/tracker-list.component.html"),
        styles: [__webpack_require__(/*! ./tracker-list.component.css */ "./src/app/views/tracker-list/tracker-list.component.css")]
    })
], TrackerListComponent);



/***/ }),

/***/ "./src/app/views/tracker/tracker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/tracker/tracker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYWNrZXIvdHJhY2tlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/tracker/tracker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/tracker/tracker.component.ts ***!
  \****************************************************/
/*! exports provided: TrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerComponent", function() { return TrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let TrackerComponent = class TrackerComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        // this.userService.getTrackers(this.authService.user.username);
    }
};
TrackerComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracker',
        template: __webpack_require__(/*! raw-loader!./tracker.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/tracker/tracker.component.html"),
        styles: [__webpack_require__(/*! ./tracker.component.css */ "./src/app/views/tracker/tracker.component.css")]
    })
], TrackerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:9080',
    ws_url: 'http://localhost:9080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pasindu/git/give-my-space/project-green-zone-angular-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map