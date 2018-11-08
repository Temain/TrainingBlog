(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/blog.module": [
		"./src/app/blog/blog.module.ts",
		"blog-blog-module"
	],
	"./forum/forum.module": [
		"./src/app/forum/forum.module.ts",
		"forum-forum-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'forum',
        loadChildren: './forum/forum.module#ForumModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-header></app-layout-header>\r\n\r\n<div class=\"wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-layout-footer></app-layout-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXE5vdCB3b3JrXFxCaXRidWNrZXRcXFRyYWluaW5nQmxvZ1xcVHJhaW5pbmdCbG9nLkZyb250RW5kXFx0cmFpbmluZy1ibG9nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'training-blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-disqus */ "./node_modules/ngx-disqus/fesm5/ngx-disqus.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/esm5/covalent-text-editor.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot(),
                ngx_disqus__WEBPACK_IMPORTED_MODULE_6__["DisqusModule"].forRoot('ngdisqusapp'),
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_7__["CovalentTextEditorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Hero Section-->\n<section style=\"background: url(../../assets/img/cover-bcg2.jpg); background-size: cover; background-position: center center\"\n  class=\"hero\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <h1>Данный сайт посвящен пикапу — искусству соблазнения девушек.</h1>\n        <a href=\"#\" class=\"hero-link\">Узнать больше...</a>\n      </div>\n    </div>\n    <!-- <a href=\".intro\" class=\"continue link-scroll\"><i class=\"fa fa-long-arrow-down\"></i> Вниз</a> -->\n  </div>\n</section>\n<!-- Intro Section-->\n<section class=\"intro\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3\">Приветствую тебя на страницах нашего ресурса!</h2>\n        <p class=\"text-big\">\n          Ты попал на пикаперский сайт <strong>Соблазнение.com</strong>.\n          Читая наш сайт, ты узнаешь о том, как соблазнять девушек, используя реально работающие техники пикапа, НЛП и\n          гипноза, как правильно строить отношения,\n          заводить друзей, эффективно общаться, добиваться успеха, быть мужественным и желанным.\n          Особенно, рекомендую использовать форум, где ты можеш спросить совет у профессиональных пикаперов\n          и получить исчерпывающие ответы.\n          Если для тебя интересны такие понятия, как пикап и соблазнение, то ты попал по адресу. <strong>Успехов тебе,\n            друг!</strong>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"featured-posts no-padding-top\">\n  <div class=\"container\">\n    <!-- Post-->\n    <div class=\"row d-flex align-items-stretch\">\n      <div class=\"text col-lg-7\">\n        <div class=\"text-inner d-flex align-items-center\">\n          <div class=\"content\">\n            <header class=\"post-header\">\n              <div class=\"category\"><a href=\"#\">Business</a><a href=\"#\">Technology</a></div><a href=\"post.html\">\n                <h2 class=\"h4\">Alberto Savoia Can Teach You About Interior</h2>\n              </a>\n            </header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod\n              tempor incididunt.</p>\n            <footer class=\"post-footer d-flex align-items-center\"><a href=\"#\" class=\"author d-flex align-items-center flex-wrap\">\n                <div class=\"avatar\"><img src=\"../../assets/img/avatar-1.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n                <div class=\"title\"><span>John Doe</span></div>\n              </a>\n              <div class=\"date\"><i class=\"icon-clock\"></i> 2 months ago</div>\n              <div class=\"comments\"><i class=\"icon-comment\"></i>12</div>\n            </footer>\n          </div>\n        </div>\n      </div>\n      <div class=\"image col-lg-5\" [style.min-height.px]=\"postImageHeight\">\n        <img src=\"../../assets/img/featured-pic-1.jpeg\" alt=\"...\">\n      </div>\n    </div>\n    <!-- Post        -->\n    <div class=\"row d-flex align-items-stretch\">\n      <div class=\"image col-lg-5\" [style.min-height.px]=\"postImageHeight\">\n        <img src=\"../../assets/img/featured-pic-2.jpeg\" alt=\"...\">\n      </div>\n      <div class=\"text col-lg-7\">\n        <div class=\"text-inner d-flex align-items-center\">\n          <div class=\"content\">\n            <header class=\"post-header\">\n              <div class=\"category\"><a href=\"#\">Business</a><a href=\"#\">Technology</a></div><a href=\"post.html\">\n                <h2 class=\"h4\">Alberto Savoia Can Teach You About Interior</h2>\n              </a>\n            </header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod\n              tempor incididunt.</p>\n            <footer class=\"post-footer d-flex align-items-center\"><a href=\"#\" class=\"author d-flex align-items-center flex-wrap\">\n                <div class=\"avatar\"><img src=\"../../assets/img/avatar-2.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n                <div class=\"title\"><span>John Doe</span></div>\n              </a>\n              <div class=\"date\"><i class=\"icon-clock\"></i> 2 months ago</div>\n              <div class=\"comments\"><i class=\"icon-comment\"></i>12</div>\n            </footer>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Post                            -->\n    <div class=\"row d-flex align-items-stretch\">\n      <div class=\"text col-lg-7\">\n        <div class=\"text-inner d-flex align-items-center\">\n          <div class=\"content\">\n            <header class=\"post-header\">\n              <div class=\"category\"><a href=\"#\">Business</a><a href=\"#\">Technology</a></div><a href=\"post.html\">\n                <h2 class=\"h4\">Alberto Savoia Can Teach You About Interior</h2>\n              </a>\n            </header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod\n              tempor incididunt.</p>\n            <footer class=\"post-footer d-flex align-items-center\">\n              <a href=\"#\" class=\"author d-flex align-items-center flex-wrap\">\n                <div class=\"avatar\"><img src=\"../../assets/img/avatar-3.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n                <div class=\"title\"><span>John Doe</span></div>\n              </a>\n              <div class=\"date\"><i class=\"icon-clock\"></i> 2 months ago</div>\n              <div class=\"comments\"><i class=\"icon-comment\"></i>12</div>\n            </footer>\n          </div>\n        </div>\n      </div>\n      <div class=\"image col-lg-5\" [style.min-height.px]=\"postImageHeight\">\n        <img src=\"../../assets/img/featured-pic-3.jpeg\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Divider Section-->\n<section style=\"background: url(../../assets/img/divider-bg.jpg); background-size: cover; background-position: center bottom\"\n  class=\"divider\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n          dolore magna aliqua</h2><a href=\"#\" class=\"hero-link\">View More</a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Latest Posts -->\n<section class=\"latest-posts\">\n  <div class=\"container\">\n    <header>\n      <h2>Последние статьи из блога</h2>\n      <p class=\"text-big\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n    </header>\n    <div class=\"row\">\n      <div class=\"post col-md-4\">\n        <div class=\"post-thumbnail\"><a href=\"post.html\"><img src=\"../../assets/img/blog-1.jpg\" alt=\"...\" class=\"img-fluid\"></a></div>\n        <div class=\"post-details\">\n          <div class=\"post-meta d-flex justify-content-between\">\n            <div class=\"date\">20 Мая | 2018</div>\n            <div class=\"category\"><a href=\"#\">Business</a></div>\n          </div>\n          <a href=\"post.html\">\n            <h3 class=\"h4\">Ways to remember your important ideas</h3>\n          </a>\n          <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n            incididunt ut labore.</p>\n        </div>\n      </div>\n      <div class=\"post col-md-4\">\n        <div class=\"post-thumbnail\"><a href=\"post.html\"><img src=\"../../assets/img/blog-2.jpg\" alt=\"...\" class=\"img-fluid\"></a></div>\n        <div class=\"post-details\">\n          <div class=\"post-meta d-flex justify-content-between\">\n            <div class=\"date\">20 Мая | 2018</div>\n            <div class=\"category\"><a href=\"#\">Technology</a></div>\n          </div><a href=\"post.html\">\n            <h3 class=\"h4\">Diversity in Engineering: Effect on Questions</h3>\n          </a>\n          <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n            incididunt ut labore.</p>\n        </div>\n      </div>\n      <div class=\"post col-md-4\">\n        <div class=\"post-thumbnail\"><a href=\"post.html\"><img src=\"../../assets/img/blog-3.jpg\" alt=\"...\" class=\"img-fluid\"></a></div>\n        <div class=\"post-details\">\n          <div class=\"post-meta d-flex justify-content-between\">\n            <div class=\"date\">20 Мая | 2018</div>\n            <div class=\"category\"><a href=\"#\">Financial</a></div>\n          </div><a href=\"post.html\">\n            <h3 class=\"h4\">Alberto Savoia Can Teach You About Interior</h3>\n          </a>\n          <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n            incididunt ut labore.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Newsletter Section-->\n<section class=\"newsletter no-padding-top\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h2>Подписаться на рассылку</h2>\n        <p class=\"text-big\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua.</p>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"form-holder\">\n          <form action=\"#\">\n            <div class=\"form-group\">\n              <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Введите адрес электронной почты\">\n              <button type=\"submit\" class=\"submit\">Подписаться</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Gallery Section-->\n<section class=\"gallery no-padding\">\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* ==========================================================\r\n*     HERO SECTION\r\n* ==========================================================\r\n*/\nsection.hero {\n  padding: 0; }\nsection.hero .container {\n  padding: 200px 20px;\n  position: relative; }\nsection.hero h1 {\n  line-height: 1.2em; }\nsection.hero .continue {\n  position: absolute;\n  bottom: 30px;\n  left: 20px;\n  text-decoration: none !important;\n  color: inherit !important;\n  text-transform: uppercase;\n  font-size: 0.75em;\n  opacity: 0.8; }\nsection.hero .continue i {\n  margin-right: 5px; }\n/* Hero Section Media Query ------------------------------------- */\n@media (max-width: 767px) {\n  section.hero .container {\n    padding: 150px 20px; } }\n/*\r\n* ==========================================================\r\n*     FEATURED POSTS SECTION\r\n* ==========================================================\r\n*/\nsection.featured-posts .row:nth-of-type(odd) .text {\n  background: #fafafa; }\nsection.featured-posts .row:last-of-type {\n  margin-bottom: 0; }\nsection.featured-posts p {\n  font-weight: 400;\n  color: #777;\n  font-size: 0.95em; }\nsection.featured-posts .text-inner {\n  padding: 70px 30px;\n  height: 100%;\n  transition: all 0.3s; }\nsection.featured-posts a {\n  color: inherit;\n  text-decoration: none; }\nsection.featured-posts h2 {\n  line-height: 1.1em;\n  color: #333;\n  transition: all 0.3s; }\nsection.featured-posts h2:hover {\n  color: #555; }\nsection.featured-posts .avatar {\n  max-width: 40px;\n  min-width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 10px; }\nsection.featured-posts .title,\nsection.featured-posts .date,\nsection.featured-posts .comments {\n  font-size: 0.8em;\n  font-weight: 400;\n  color: #999; }\nsection.featured-posts .title i,\nsection.featured-posts .date i,\nsection.featured-posts .comments i {\n  margin-right: 5px; }\nsection.featured-posts .title::after,\nsection.featured-posts .date::after,\nsection.featured-posts .comments::after {\n  content: '|';\n  display: inline-block;\n  margin: 0 7px;\n  font-size: 0.9em;\n  color: #ccc; }\nsection.featured-posts .comments::after {\n  display: none; }\nsection.featured-posts .image {\n  max-height: 200px;\n  width: auto;\n  overflow: hidden;\n  padding: 0; }\nsection.featured-posts .image img {\n  height: 100%; }\nsection.featured-posts .post-header {\n  margin-bottom: 10px; }\nsection.featured-posts .post-footer {\n  margin-top: 30px; }\n/* Featured Posts Section Media Query ------------------------------------- */\n@media (max-width: 991px) {\n  section.featured-posts .image {\n    order: 1;\n    max-height: 300px;\n    min-height: auto !important; }\n  section.featured-posts .image img {\n    width: 100%;\n    height: auto !important; }\n  section.featured-posts .text {\n    order: 2; } }\n@media (max-width: 575px) {\n  section.featured-posts .post-footer {\n    font-size: 0.9em; } }\n@media (max-width: 350px) {\n  section.featured-posts .text-inner {\n    padding: 15px; }\n  section.featured-posts .post-footer {\n    font-size: 0.75em; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcTm90IHdvcmtcXEJpdGJ1Y2tldFxcVHJhaW5pbmdCbG9nXFxUcmFpbmluZ0Jsb2cuRnJvbnRFbmRcXHRyYWluaW5nLWJsb2cvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7RUFJRTtBQUNGO0VBQ0UsV0FBVSxFQUVYO0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osV0FBVTtFQUNWLGlDQUFnQztFQUNoQywwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixhQUFZLEVBQ2I7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjtBQUVELG9FQUFvRTtBQUNwRTtFQUNFO0lBQ0Usb0JBQW1CLEVBQ3BCLEVBQUE7QUFHSDs7OztFQUlFO0FBQ0Y7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBRVoscUJBQW9CLEVBQ3JCO0FBRUQ7RUFDRSxlQUFjO0VBQ2Qsc0JBQXFCLEVBQ3RCO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUVYLHFCQUFvQixFQUNyQjtBQUVEO0VBQ0UsWUFBVyxFQUNaO0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25CO0FBRUQ7OztFQUdFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaO0FBRUQ7OztFQUdFLGtCQUFpQixFQUNsQjtBQUVEOzs7RUFHRSxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaO0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFdBQVUsRUFDWDtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVELDhFQUE4RTtBQUM5RTtFQUNFO0lBR0UsU0FBUTtJQUNSLGtCQUFpQjtJQUNqQiw0QkFBMkIsRUFDNUI7RUFDRDtJQUNFLFlBQVc7SUFDWCx3QkFBdUIsRUFDeEI7RUFDRDtJQUdFLFNBQVEsRUFDVCxFQUFBO0FBR0g7RUFDRTtJQUNFLGlCQUFnQixFQUNqQixFQUFBO0FBR0g7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0Usa0JBQWlCLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogICAgIEhFUk8gU0VDVElPTlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuc2VjdGlvbi5oZXJvIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8vIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5zZWN0aW9uLmhlcm8gLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjAwcHggMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnNlY3Rpb24uaGVybyBoMSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG59XHJcblxyXG5zZWN0aW9uLmhlcm8gLmNvbnRpbnVlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuc2VjdGlvbi5oZXJvIC5jb250aW51ZSBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLyogSGVybyBTZWN0aW9uIE1lZGlhIFF1ZXJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgc2VjdGlvbi5oZXJvIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTUwcHggMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICAgICBGRUFUVVJFRCBQT1NUUyBTRUNUSU9OXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5yb3c6bnRoLW9mLXR5cGUob2RkKSAudGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyBwIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC50ZXh0LWlubmVyIHtcclxuICBwYWRkaW5nOiA3MHB4IDMwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZWQtcG9zdHMgYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIGgyIHtcclxuICBsaW5lLWhlaWdodDogMS4xZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyBoMjpob3ZlciB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZWQtcG9zdHMgLmF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC50aXRsZSxcclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuZGF0ZSxcclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuY29tbWVudHMge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAudGl0bGUgaSxcclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuZGF0ZSBpLFxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5jb21tZW50cyBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAudGl0bGU6OmFmdGVyLFxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5kYXRlOjphZnRlcixcclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuY29tbWVudHM6OmFmdGVyIHtcclxuICBjb250ZW50OiAnfCc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCA3cHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuY29tbWVudHM6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5pbWFnZSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAucG9zdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZWQtcG9zdHMgLnBvc3QtZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4vKiBGZWF0dXJlZCBQb3N0cyBTZWN0aW9uIE1lZGlhIFF1ZXJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuaW1hZ2Uge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcclxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAuaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHNlY3Rpb24uZmVhdHVyZWQtcG9zdHMgLnRleHQge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcclxuICAgIC1tcy1mbGV4LW9yZGVyOiAyO1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5wb3N0LWZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgc2VjdGlvbi5mZWF0dXJlZC1wb3N0cyAudGV4dC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBzZWN0aW9uLmZlYXR1cmVkLXBvc3RzIC5wb3N0LWZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.equalizeHeight('.featured-posts .text', '.featured-posts .image');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.equalizeHeight = function (text, image) {
        this.postImageHeight = this.element.nativeElement.querySelector(text).offsetHeight;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"logo\">\n          <h6 class=\"text-white\">Соблазнение.com</h6>\n        </div>\n        <div class=\"contact-details\">\n          <p>53 Broadway, Broklyn, NY 11249</p>\n          <p>Phone: (020) 123 456 789</p>\n          <p>Email: <a href=\"mailto:info@company.com\">Info@Company.com</a></p>\n          <ul class=\"social-menu\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"menus d-flex\">\n          <ul class=\"list-unstyled\">\n            <li> <a href=\"#\">My Account</a></li>\n            <li> <a href=\"#\">Add Listing</a></li>\n            <li> <a href=\"#\">Pricing</a></li>\n            <li> <a href=\"#\">Privacy &amp; Policy</a></li>\n          </ul>\n          <ul class=\"list-unstyled\">\n            <li> <a href=\"#\">Our Partners</a></li>\n            <li> <a href=\"#\">FAQ</a></li>\n            <li> <a href=\"#\">How It Works</a></li>\n            <li> <a href=\"#\">Contact</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"latest-posts\"><a href=\"#\">\n            <div class=\"post d-flex align-items-center\">\n              <div class=\"image\"><img src=\"../../assets/img/small-thumbnail-1.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n              <div class=\"title\"><strong>Hotels for all budgets</strong><span class=\"date last-meta\">October 26, 2016</span></div>\n            </div></a><a href=\"#\">\n            <div class=\"post d-flex align-items-center\">\n              <div class=\"image\"><img src=\"../../assets/img/small-thumbnail-2.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n              <div class=\"title\"><strong>Great street atrs in London</strong><span class=\"date last-meta\">October 26, 2016</span></div>\n            </div></a><a href=\"#\">\n            <div class=\"post d-flex align-items-center\">\n              <div class=\"image\"><img src=\"../../assets/img/small-thumbnail-3.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n              <div class=\"title\"><strong>Best coffee shops in Sydney</strong><span class=\"date last-meta\">October 26, 2016</span></div>\n            </div></a></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <p>&copy; 2018. All rights reserved. Your great site.</p>\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <!-- <p>Template By <a href=\"https://bootstraptemple.com\" class=\"text-white\">Bootstrap Temple</a> -->\n          <!-- Please do not remove the backlink to Bootstrap Temple unless you purchase an attribution-free license @ Bootstrap Temple or support us at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)                         -->\n          <!-- </p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 60px;\n  /* Vertically center the text there */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9mb290ZXIvRTpcXE5vdCB3b3JrXFxCaXRidWNrZXRcXFRyYWluaW5nQmxvZ1xcVHJhaW5pbmdCbG9nLkZyb250RW5kXFx0cmFpbmluZy1ibG9nL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsYUFBWTtFQUNaLGtCQUFpQjtFQUFFLHNDQUFzQyxFQUUxRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogU2V0IHRoZSBmaXhlZCBoZWlnaHQgb2YgdGhlIGZvb3RlciBoZXJlICovXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4OyAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dCB0aGVyZSAqL1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <!-- Main Navbar-->\n  <nav class=\"navbar navbar-expand-lg\">\n    <div class=\"search-area\">\n      <div class=\"search-area-inner d-flex align-items-center justify-content-center\">\n        <div class=\"close-btn\"><i class=\"icon-close\"></i></div>\n        <div class=\"row d-flex justify-content-center\">\n          <div class=\"col-md-8\">\n            <form action=\"#\">\n              <div class=\"form-group\">\n                <input type=\"search\" name=\"search\" id=\"search\" placeholder=\"What are you looking for?\">\n                <button type=\"submit\" class=\"submit\"><i class=\"icon-search-1\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"navbar-header d-flex align-items-center justify-content-between\">\n        <a href=\"/\" class=\"navbar-brand\">\n          <h3>\n            <img class=\"header-logo__img\" />\n            <strong>Соблазнение</strong>\n            <small class=\"text-muted\">.com</small>\n          </h3>\n        </a>\n        <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarcollapse\" aria-controls=\"navbarcollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"><span></span><span></span><span></span></button>\n      </div>\n      <app-layout-navbar></app-layout-navbar>\n    </div>\n  </nav>\n</header>\n\n<!-- <header class=\"blog-header py-3\">\n  <div class=\"row flex-nowrap justify-content-between align-items-center\">\n    <div class=\"col-4\">\n      <a class=\"blog-header-logo text-dark\" href=\"#\">\n          <img class=\"blog-header-logo__img\" />\n        {{ title }}\n      </a>\n    </div>\n    <div class=\"col-4 text-right\">\n    </div>\n    <div class=\"col-4 d-flex justify-content-end align-items-center\">\n      <a class=\"text-muted\" href=\"#\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mx-3\"><circle cx=\"10.5\" cy=\"10.5\" r=\"7.5\"></circle><line x1=\"21\" y1=\"21\" x2=\"15.8\" y2=\"15.8\"></line></svg>\n      </a>\n      <a class=\"btn btn-sm btn-outline-secondary\" href=\"#\">Регистрация</a>\n    </div>\n  </div>\n</header> -->\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-header {\n  line-height: 1;\n  border-bottom: 1px solid #e5e5e5; }\n\n.header-logo__img {\n  content: url('/TrainingBlog/logo2.png');\n  margin-top: -0.25em;\n  width: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9oZWFkZXIvRTpcXE5vdCB3b3JrXFxCaXRidWNrZXRcXFRyYWluaW5nQmxvZ1xcVHJhaW5pbmdCbG9nLkZyb250RW5kXFx0cmFpbmluZy1ibG9nL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUNBQWdDLEVBQ2pDOztBQUVEO0VBQ0Usd0NBQWdEO0VBQ2hELG9CQUFtQjtFQUNuQixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1oZWFkZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4uaGVhZGVyLWxvZ29fX2ltZyB7XHJcbiAgY29udGVudDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2xvZ28yLnBuZycpO1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcbiAgd2lkdGg6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/navbar/navbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/navbar/navbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbarcollapse\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a href=\"/\" class=\"nav-link\" [ngClass]=\"{ 'active' : isActiveLink('/') }\">Главная</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"/blog\" class=\"nav-link\" [ngClass]=\"{ 'active' : isActiveLink('/blog') }\">Статьи</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"/forum\" class=\"nav-link\" [ngClass]=\"{ 'active' : isActiveLink('/forum') }\">Форум</a>\n      </li>\n    </ul>\n    <div class=\"navbar-text\">\n      <a href=\"#\" class=\"search-btn\"><i class=\"icon-search-1\"></i></a>\n    </div>\n    <div class=\"ml-4\">\n      <a class=\"btn btn-sm btn-outline-secondary\" href=\"#\">Регистрация</a>\n    </div>\n    <!-- <ul class=\"langs navbar-text\">\n      <a href=\"#\" class=\"active\">EN</a>\n      <span></span>\n      <a href=\"#\">ES</a>\n    </ul> -->\n  </div>\n\n<!-- <nav class=\"nav nav-masthead justify-content-center\">\n  <a class=\"nav-link\" [ngClass]=\"{ 'active' : isActiveLink('/') }\" href=\"#\">Главная</a>\n  <a routerLink=\"/blog\" [ngClass]=\"{ 'active' : isActiveLink('/blog') }\" class=\"nav-link\" href=\"javascript:void(0);\" >Блог</a>\n  <a routerLink=\"/forum\" [ngClass]=\"{ 'active' : isActiveLink('/forum') }\" class=\"nav-link\" href=\"javascript:void(0);\">Форум</a>\n</nav> -->"

/***/ }),

/***/ "./src/app/shared/layout/navbar/navbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/navbar/navbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: #00000080;\n  background-color: transparent;\n  border-bottom: .25rem solid transparent; }\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-masthead .active {\n  color: black;\n  border-bottom-color: black; }\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left; }\n  .nav-masthead {\n    float: left;\n    margin-left: 1.2em;\n    margin-bottom: 0.5em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZiYXIvRTpcXE5vdCB3b3JrXFxCaXRidWNrZXRcXFRyYWluaW5nQmxvZ1xcVHJhaW5pbmdCbG9nLkZyb250RW5kXFx0cmFpbmluZy1ibG9nL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQiw4QkFBNkI7RUFDN0Isd0NBQXVDLEVBQ3hDOztBQUVEOztFQUVFLCtDQUE2QyxFQUM5Qzs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGFBQVk7RUFDWiwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRTtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixxQkFBb0IsRUFDckIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAuMjVyZW0gMDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpob3ZlcixcclxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcclxufVxyXG5cclxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsgKyAubmF2LWxpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAubWFzdGhlYWQtYnJhbmQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5uYXYtbWFzdGhlYWQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/layout/navbar/navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/navbar/navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isActiveLink = function (href) {
        return this.router.url === href;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/layout/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/shared/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/shared/layout/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: [
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Not work\Bitbucket\TrainingBlog\TrainingBlog.FrontEnd\training-blog\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map