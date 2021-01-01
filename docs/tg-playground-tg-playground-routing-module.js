(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tg-playground-tg-playground-routing-module"],{

/***/ "mvAf":
/*!***************************************************************!*\
  !*** ./src/app/tg-playground/tg-playground-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TgPlaygroundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TgPlaygroundRoutingModule", function() { return TgPlaygroundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tg_playground_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tg-playground.component */ "+Tc4");
/* harmony import */ var _play_array01_play_array01_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play-array01/play-array01.component */ "z5n0");






const routes = [
    { path: '', component: _tg_playground_component__WEBPACK_IMPORTED_MODULE_2__["TgPlaygroundComponent"] },
    { path: 'array01', component: _play_array01_play_array01_component__WEBPACK_IMPORTED_MODULE_3__["PlayArray01Component"] }
];
class TgPlaygroundRoutingModule {
}
TgPlaygroundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TgPlaygroundRoutingModule });
TgPlaygroundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TgPlaygroundRoutingModule_Factory(t) { return new (t || TgPlaygroundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TgPlaygroundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TgPlaygroundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tg-playground-tg-playground-routing-module.js.map