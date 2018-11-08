(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-forum-module"],{

/***/ "./src/app/forum/add/add.component.html":
/*!**********************************************!*\
  !*** ./src/app/forum/add/add.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "./src/app/forum/add/add.component.scss":
/*!**********************************************!*\
  !*** ./src/app/forum/add/add.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forum/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/forum/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/forum/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/forum/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/forum/edit/edit.component.html":
/*!************************************************!*\
  !*** ./src/app/forum/edit/edit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Edit first topic!\n</p>\n\n<td-text-editor [value]=\"firstTheme\" [options]=\"options\"></td-text-editor>\n"

/***/ }),

/***/ "./src/app/forum/edit/edit.component.scss":
/*!************************************************!*\
  !*** ./src/app/forum/edit/edit.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forum/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/forum/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.firstTheme = "\n    > Blockquotes are very handy in email to emulate reply text.\n  ";
        this.options = {};
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/forum/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/forum/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/forum/forum-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumRoutingModule", function() { return ForumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/forum/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/forum/edit/edit.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show/show.component */ "./src/app/forum/show/show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forum_component__WEBPACK_IMPORTED_MODULE_2__["ForumComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
    {
        path: ':id',
        component: _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"]
    }
];
var ForumRoutingModule = /** @class */ (function () {
    function ForumRoutingModule() {
    }
    ForumRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ForumRoutingModule);
    return ForumRoutingModule;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row mt-3 mb-3\">\n      <div class=\"col-6\">\n        <a class=\"btn btn-sm btn-outline-primary\" [routerLink]=\"['/forum', 'add']\">Добавить</a>\n      </div>\n    </div>\n\n    <div>\n      <div>\n          <strong>Топик #1</strong>\n      </div>\n      <div>\n        <small>\n            <markdown [data]=\"firstTopic\"></markdown>\n        </small>\n      </div>   \n      <div>\n        <a [routerLink]=\"['/forum', 1]\"><small>Читать дальше...</small></a>\n        <a class=\"float-right\" [routerLink]=\"['/forum', 'edit', 1]\"><small>Редактировать</small></a>\n      </div>\n    </div>\n\n    <hr />\n\n    <div>\n      <div>\n          <strong>Топик #2</strong>\n      </div>\n      <div>\n        <small>\n            <markdown [data]=\"secondTopic\"></markdown>\n        </small>\n      </div>   \n      <div>\n        <a [routerLink]=\"['/forum', 1]\"><small>Читать дальше...</small></a>\n        <a class=\"float-right\" [routerLink]=\"['/forum', 'edit', 1]\"><small>Редактировать</small></a>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/forum/forum.component.scss":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
        this.firstTopic = "\n    Inline math equation: $omega = dphi / dt$. Display\n    math should get its own line like so:\n\n    $$I = int \rho R^{2} dV$$\n\n    And note that you can backslash-escape any punctuation characters\n    which you wish to be displayed literally, ex.: `foo`, *bar*, etc.\n  ";
        this.secondTopic = "\n    ## Blockquotes\n\n    > Blockquotes can also be nested...\n    >> ...by using additional greater-than signs right next to each other...\n    > > > ...or with spaces between arrows.\n  ";
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.scss */ "./src/app/forum/forum.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum.module.ts":
/*!***************************************!*\
  !*** ./src/app/forum/forum.module.ts ***!
  \***************************************/
/*! exports provided: ForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumModule", function() { return ForumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _forum_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum-routing.module */ "./src/app/forum/forum-routing.module.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-disqus */ "./node_modules/ngx-disqus/fesm5/ngx-disqus.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/esm5/covalent-text-editor.js");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show/show.component */ "./src/app/forum/show/show.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/forum/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/forum/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ForumModule = /** @class */ (function () {
    function ForumModule() {
    }
    ForumModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_8__["ShowComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _forum_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForumRoutingModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild(),
                ngx_disqus__WEBPACK_IMPORTED_MODULE_5__["DisqusModule"].forRoot('ngdisqusapp'),
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_6__["CovalentTextEditorModule"]
            ]
        })
    ], ForumModule);
    return ForumModule;
}());



/***/ }),

/***/ "./src/app/forum/show/show.component.html":
/*!************************************************!*\
  !*** ./src/app/forum/show/show.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  First topic!\n\n  <markdown [data]=\"firstTheme\"></markdown>\n</p>\n\n<disqus [identifier]=\"pageId\"></disqus>"

/***/ }),

/***/ "./src/app/forum/show/show.component.scss":
/*!************************************************!*\
  !*** ./src/app/forum/show/show.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL3Nob3cvc2hvdy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forum/show/show.component.ts":
/*!**********************************************!*\
  !*** ./src/app/forum/show/show.component.ts ***!
  \**********************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowComponent = /** @class */ (function () {
    function ShowComponent() {
        this.pageId = '/show';
        this.firstTheme = "\n    > Blockquotes are very handy in email to emulate reply text.\n  ";
    }
    ShowComponent.prototype.ngOnInit = function () {
    };
    ShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/forum/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.scss */ "./src/app/forum/show/show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forum-forum-module.js.map