(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"] },
    { path: 'events/:id', component: _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"] },
    { path: 'partners', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__["PartnersComponent"] },
    { path: 'tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"] },
    { path: 'not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-copyright></app-copyright>"

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
        this.title = 'tedxsnu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _events_event_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/event/event.component */ "./src/app/events/event/event.component.ts");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");
/* harmony import */ var _events_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/pagination/pagination.component */ "./src/app/events/pagination/pagination.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_7__["PartnersComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
                _events_event_event_component__WEBPACK_IMPORTED_MODULE_9__["EventComponent"],
                _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_10__["CopyrightComponent"],
                _events_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"],
                _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_12__["TicketsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/copyright/copyright.component.css":
/*!***************************************************!*\
  !*** ./src/app/copyright/copyright.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".copyright {\n\t/*text-align: center;*/\n\tpadding-top: 20px;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n\tpadding-bottom: 20px;\n\tbackground-color: #000000;\n\tcolor: #c6c6c6;\n\t/*text-transform: uppercase;*/\n\tfont-weight: lighter;\n\tletter-spacing: 2px;\n\tborder-top-width: 2px;\n}\n\n.copyright a {\n\tpadding-right: 10px;\n\topacity: 0.7;\n}\n\n.copyright a:hover {\n\topacity: 1;\n}\n"

/***/ }),

/***/ "./src/app/copyright/copyright.component.html":
/*!****************************************************!*\
  !*** ./src/app/copyright/copyright.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"copyright\">\n  <a href=\"https://www.facebook.com/TEDxSNU/\"><img src=\"images/facebook.png\" width=\"25\" alt=\"\"/></a>\n  <a href=\"https://www.instagram.com/tedxsnu/\"><img src=\"images/insagram.png\" width=\"25\" alt=\"\"/></a>\n  <p></p>\n  <p>&copy;2019 All Rights Reserved.</p>\n  <p>2019 16th TEDxSNU Director : Dahye Cho</p>\n  <p>Mail : tedxsnu@gmail.com</p>\n</div>"

/***/ }),

/***/ "./src/app/copyright/copyright.component.ts":
/*!**************************************************!*\
  !*** ./src/app/copyright/copyright.component.ts ***!
  \**************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
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

var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
    }
    CopyrightComponent.prototype.ngOnInit = function () {
    };
    CopyrightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copyright',
            template: __webpack_require__(/*! ./copyright.component.html */ "./src/app/copyright/copyright.component.html"),
            styles: [__webpack_require__(/*! ./copyright.component.css */ "./src/app/copyright/copyright.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightComponent);
    return CopyrightComponent;
}());



/***/ }),

/***/ "./src/app/events/event.model.ts":
/*!***************************************!*\
  !*** ./src/app/events/event.model.ts ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(name, desc, thumbnails) {
        this.name = name;
        this.description = desc;
        this.thumbnails = thumbnails;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/events/event/event.component.css":
/*!**************************************************!*\
  !*** ./src/app/events/event/event.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event {\n    padding-left: 15%;\n\tpadding-right: 15%;\n\tpadding-top: 10px;\n\tpadding-bottom: 50px;\n\tdisplay: block;\n\tbackground-color: #FFFFFF;\n\tmargin-top: 0px;\n\tline-height: 1.7;\n}\n\n.event h1 {\n    color: #e62b1e;\n}\n\n.event p {\n    font-size: 16px;\n}\n\n.thumbnail {\n    display: inline-block;\n    width: 250px;\n    margin: 16px;\n}\n\n.thumbnail img {\n    padding-bottom: 10px;\n}\n\n.thumbnail p {\n    padding-left: 10px;\n    font-size: 16px;\n}\n\nbutton {\n    display: none;\n    color: black;\n    background-color: white;\n    border-color: black;\n    width: 200px;\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\nbutton:hover {\n    color: black;\n    background-color:#f7f7f7;\n    border-color: black;\n}\n\n@media (max-width: 767px) {\n    .thumbnail {\n        margin-top: 2px;\n        margin-bottom: 2px;\n    }\n\n    .showTalks.responsive {\n        display: block;\n    }\n\n    .showTalks {\n        display: none;\n    }\n\n    button {\n        display: block;\n    }\n}\n\n"

/***/ }),

/***/ "./src/app/events/event/event.component.html":
/*!***************************************************!*\
  !*** ./src/app/events/event/event.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event\">\n    <h1>Events</h1>\n    <hr>\n    <h2>{{ event.name }}</h2>\n    <p>{{ event.description }}</p>\n    <br>\n    <div align=\"center\">\n        <button (click)=\"onClickShow()\" class=\"btn\">\n            View Talks\n        </button>\n    </div>\n    <div class=\"showTalks\" [ngClass] = \"{responsive : show}\">\n        <div class=\"thumbnail\" *ngFor = \"let thumbnail of event.thumbnails\">\n            <a href=\"{{ thumbnail.videoLink }}\">\n                <img src=\"{{ thumbnail.imageLink }}\" width=\"auto\" alt=\"\">\n            </a>\n            <p><strong>{{ thumbnail.name }}</strong></p>\n            <p>{{ thumbnail.title }}</p>\n        </div>\n    </div>     \n</div>"

/***/ }),

/***/ "./src/app/events/event/event.component.ts":
/*!*************************************************!*\
  !*** ./src/app/events/event/event.component.ts ***!
  \*************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
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

var EventComponent = /** @class */ (function () {
    function EventComponent() {
        this.show = false;
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.ngOnChanges = function () {
        this.show = false;
    };
    EventComponent.prototype.onClickShow = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Event)
    ], EventComponent.prototype, "event", void 0);
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/events/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/events/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pagination {\n    padding-bottom: 100px;\n}\n\n.pagination a {\n    color: black;\n    float: left;\n    padding: 6px 12px;\n    text-decoration: none;\n    transition: background-color .3s;\n\t\tfont-size: 15px;\n}\n\n.pagination a.active {\n    background-color: #e62b1e;\n    color: white;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n\n@media (max-width: 767px) {\n    img {\n        margin-top: 30px;\n    }\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"images/banner2_2.png\" width=\"100%\" alt=\"\"/>\n<app-event [event]=\"events[event_id]\"></app-event>\n<app-pagination [event_numbers]=\"events.length\"></app-pagination>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.model */ "./src/app/events/event.model.ts");
/* harmony import */ var _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumbnail.model */ "./src/app/events/thumbnail.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = /** @class */ (function () {
    function EventsComponent(route) {
        this.route = route;
        this.events = [
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('TEDxSNU 2018 Fall Event: 흑 <보이지 않는 것, 보지 않았던 것>', "\n      '\uC6B0\uB9AC \uC0B6\uC758 \uC77C\uBD80\uBD84\uC774\uC9C0\uB9CC \uC775\uC219\uD558\uC9C0 \uC54A\uACE0 \uC27D\uAC8C \uC774\uC57C\uAE30\uB418\uC9C0 \uC54A\uB294 \u2018\uD751\u2019\uC5D0 \uB300\uD55C \uC544\uC774\uB514\uC5B4\uB4E4\uC744 \uB098\uB204\uC5C8\uC2B5\uB2C8\uB2E4.'\n      ", [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Song Young Hee', '다름의 재발견', 'https://www.youtube.com/watch?v=NP6R1glCUhg', 'https://img.youtube.com/vi/NP6R1glCUhg/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Russel. H. Park', '물 속에서 흑을 경험하다', 'https://www.youtube.com/watch?v=r2knFEIKHF8', 'https://img.youtube.com/vi/r2knFEIKHF8/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Christopher Shin Packard', 'On the Blacklist', 'https://www.youtube.com/watch?v=ONwL8fNO6uk', 'https://img.youtube.com/vi/ONwL8fNO6uk/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Jung Yang Soo', '죽음이 던지는 질문', 'https://www.youtube.com/watch?v=kkML8vWMzeg', 'https://img.youtube.com/vi/kkML8vWMzeg/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Dong I-hyang', '연극의 어둠, 암전', 'https://www.youtube.com/watch?v=ShascOp3UT4', 'https://img.youtube.com/vi/ShascOp3UT4/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 11회 TEDxSNU: 美치다', "\n      '\u7F8E\uCE58\uB2E4'\uB97C \uCEE8\uC149\uC73C\uB85C \uD558\uC5EC '\uB204\uAD6C\uB098 \uBBF8\uCE5C \uC7A0\uC7AC\uB825\uC744 \uAC16\uACE0 \uC788\uB2E4'\uB294 \uAC83\uC5D0 \uC8FC\uBAA9\uD558\uACE0\uC790 \uD55C\uB2E4. '\n      ", [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Young Uk', 'Your mealworm pasta is ready to be served!', 'https://www.youtube.com/watch?v=6rssJgvTREk', 'https://img.youtube.com/vi/6rssJgvTREk/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Horan', 'The qualification for sorrow', 'https://www.youtube.com/watch?v=Rymz4gYYANA', 'https://img.youtube.com/vi/Rymz4gYYANA/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Peter Park', 'Angel wings swing! ', 'https://www.youtube.com/watch?v=3f4mSvutuV8', 'https://img.youtube.com/vi/3f4mSvutuV8/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Seo Gyeong', 'The promise carved on an empty chair', 'https://www.youtube.com/watch?v=ABoPWIyWucU', 'https://img.youtube.com/vi/ABoPWIyWucU/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Soo Jung', 'Judicial Justice : the story beyond prison bars', 'https://www.youtube.com/watch?v=xNM8OFzlauQ', 'https://img.youtube.com/vi/xNM8OFzlauQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Young Sook', 'Mad Women-The Utterance ', 'https://www.youtube.com/watch?v=mcblsjHDaS0', 'https://img.youtube.com/vi/mcblsjHDaS0/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 10회 TEDxSNU:', '단일한 주제없이 진행되며, 특정 주제나 분야에 얽매이지 않는 다양한 분야의 연사님들이 자유롭게 아이디어를 나누고 청중과 소통할 수 있도록 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Baek Ji Won', 'Innovating housing for youth in Korea', 'https://www.youtube.com/watch?v=M0dz8lztdV4', 'https://img.youtube.com/vi/M0dz8lztdV4/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Gregor Konzack', 'Of Showa and Shoah', 'https://www.youtube.com/watch?v=ii76P1ftD1o', 'https://img.youtube.com/vi/ii76P1ftD1o/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Coreyah', 'I do not know Korean traditional music', 'https://www.youtube.com/watch?v=Z77aTDWccdE', 'https://img.youtube.com/vi/Z77aTDWccdE/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Austin Seungmin Lee', 'How to design when things are no longer Sci-Fi?', 'https://www.youtube.com/watch?v=QwBHz8y99UQ', 'https://img.youtube.com/vi/QwBHz8y99UQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Seong Jun', 'Stop persuading, Spark empathy', 'https://www.youtube.com/watch?v=3JSJyd0MGcM', 'https://img.youtube.com/vi/3JSJyd0MGcM/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Seong Hwan', 'Time after death flies with flies', 'https://www.youtube.com/watch?v=XOaHB7apteA', 'https://img.youtube.com/vi/XOaHB7apteA/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 9회 TEDxSNU: #Hashtag', "세상을 연결하는 가장 간편하고도 강력한 도구, '#Hashtag'에 주목하여 행사안에서 모든 분들의 아이디어와 경험이 #TEDxSNU로 연결(Connecting)되고 확산(Spreading)되어 더 큰 움직임이 되고자 한다. ", [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Li Seok', 'To draw the white universe', 'https://www.youtube.com/watch?v=2j6K6vZsMmY', 'https://img.youtube.com/vi/2j6K6vZsMmY/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Eom Soo Won', 'Machine learning is changing finance', 'https://www.youtube.com/watch?v=Mtfv3g-tZ8w', 'https://img.youtube.com/vi/Mtfv3g-tZ8w/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Hyun Sook', 'Equal medicine for all', 'https://www.youtube.com/watch?v=JyL0FCVxKT0', 'https://img.youtube.com/vi/JyL0FCVxKT0/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Noh Ella', 'My dinner with Noella', 'https://www.youtube.com/watch?v=8mf495cuW2A', 'https://img.youtube.com/vi/8mf495cuW2A/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Ho Young', 'Get to know Tenspoon', 'https://www.youtube.com/watch?v=i802bQBvZ1o', 'https://img.youtube.com/vi/i802bQBvZ1o/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Yoo Hyun Jun', 'Why you want to walk on those streets', 'https://www.youtube.com/watch?v=_bnsdI4ApzI', 'https://img.youtube.com/vi/_bnsdI4ApzI/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 8회 TEDxSNU: 21.2세기', '21세기 중에서도 21.2세기에 대해 이야기하며, 빠르게 변하는 세상을 관찰하고자 한다. 현재와 가까운 미래에 대한 아이디어를 공유하며 21.2세기를 입체적으로 조명하고자 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Anthony Paek', "Don't be evil, AI!", 'https://www.youtube.com/watch?v=Av_ERJgKv1o', 'https://img.youtube.com/vi/Av_ERJgKv1o/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Seong Ho', 'Job crisis', 'https://www.youtube.com/watch?v=OXyAeMi-eJk', 'https://img.youtube.com/vi/OXyAeMi-eJk/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Jin Yeop', 'Neighborhood artists', 'https://www.youtube.com/watch?v=peRuUMosEWk', 'https://img.youtube.com/vi/peRuUMosEWk/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lim Jong Jin', 'What do you see in the photos?', 'https://www.youtube.com/watch?v=4dOwISA__ck', 'https://img.youtube.com/vi/4dOwISA__ck/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Han Ye Lol', 'Follow your pure instinct', 'https://www.youtube.com/watch?v=TZXyZMJEhFY&t=2s', 'https://img.youtube.com/vi/TZXyZMJEhFY&t=2s/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Ki Hyun', 'Happiness, do we know its destination?', 'https://www.youtube.com/watch?v=BWC1pO7hHuA', 'https://img.youtube.com/vi/BWC1pO7hHuA/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 7회 TEDxSNU: 몸', "우리의 '몸'을 재조명함으로, 우리 '몸'에 담긴무한한 잠재력을 확인하고, 이를 통해 새로운 영감을 일으키고자 한다. ", [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Jong Bum', 'The reason why online lectures are boring', 'https://www.youtube.com/watch?v=WSoUBt1pi6A', 'https://img.youtube.com/vi/WSoUBt1pi6A/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Bae Dal Lae', 'Bae Dallae’s experiment, Body as a canvas', 'https://www.youtube.com/watch?v=6XrSiMiDYuQ', 'https://img.youtube.com/vi/6XrSiMiDYuQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Byun Jae Won', 'How to train your crutches in the club', 'https://www.youtube.com/watch?v=OdWOuzPntsg&t=3s', 'https://img.youtube.com/OdWOuzPntsg&t=3s/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Yoo Jin Kyu', 'Everything alive speaks through its body', 'https://www.youtube.com/watch?v=uPUG76hEaCU', 'https://img.youtube.com/vi/uPUG76hEaCU/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Eun Hee', 'Human bodies displayed in show window', 'https://www.youtube.com/watch?v=l05S7CNdAtQ', 'https://img.youtube.com/vi/l05S7CNdAtQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Choi Won Ho', 'Too much practice kills talent', 'https://www.youtube.com/watch?v=S5R0UP_TDxU', 'https://img.youtube.com/vi/S5R0UP_TDxU/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 6회 TEDxSNU: Coding', '연사분들이 각자의 방식으로 코딩한 가치들을 살펴보고, 이 가치들이 우리가 중요하다고 생각하는 가치들과 얼마나 닿아있는, 또 우리가 실현하고 싶은 가치를 스스로 어떤 방식으로 토딩할 수 있을 것인지를 생각해보는 시간을 갖고자 한다. ', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Ji Yin Kook', 'The answer is in the streets', 'https://www.youtube.com/watch?v=vD2-1QCzfs8', 'https://img.youtube.com/vi/vD2-1QCzfs8/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Egoing', 'Explore the new through coding', 'https://www.youtube.com/watch?v=xym0VYP1CPI', 'https://img.youtube.com/vi/xym0VYP1CPI/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Myung Ei Jung', 'Adding coding to thinking', 'https://www.youtube.com/watch?v=7PlkQxocWOQ', 'https://img.youtube.com/vi/7PlkQxocWOQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Han Jae Sun', 'Data, the power to create', 'https://www.youtube.com/watch?v=XLMO-7ILuc8', 'https://img.youtube.com/vi/XLMO-7ILuc8/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Uk', 'If you love Earth, take action!', 'https://www.youtube.com/watch?v=Xj9MeDi-IqA', 'https://img.youtube.com/vi/Xj9MeDi-IqA/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Yang Seok Jung', 'Coding life into the language of trees', 'https://www.youtube.com/watch?v=zp4Zi-DIyhE', 'https://img.youtube.com/vi/zp4Zi-DIyhE/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Su Kyung Chung', "How Marcel Duchamp's 'Fountain' is coded in the language of art history", 'https://www.youtube.com/watch?v=UGkPiH7d51M', 'https://img.youtube.com/vi/UGkPiH7d51M/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 5회 TEDxSNU: Link, 세상을 잇다', '본 강연 자체가 하나의 링크가 되기를 바라며, 울타리에 갇히지 않고, 여러 분야, 문화, 아이디어를 넘나드는 연결을 통해 새로운 도약을 이루어내는 우리 사회의 링커(Linker)들의 이야기를 공유하고자 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Un Ho', 'How will we live', 'https://www.youtube.com/watch?v=yMrhHuS4adY', 'https://img.youtube.com/vi/yMrhHuS4adY/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Song Han Na', "Curating is not just an exhibition, but it's context", 'https://www.youtube.com/watch?v=CjK1e2RhDlA', 'https://img.youtube.com/vi/CjK1e2RhDlA/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Ji Woong', 'Software is eating the world!', 'https://www.youtube.com/watch?v=EliI4PEX78s', 'https://img.youtube.com/vi/EliI4PEX78s/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Yoon Seon Joo', 'What is your dream?', 'https://www.youtube.com/watch?v=_6MAu4ND_7I', 'https://img.youtube.com/vi/_6MAu4ND_7I/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kwon Goo Yik', 'just listen - what they truly need', 'https://www.youtube.com/watch?v=VrejpCpibWc', 'https://img.youtube.com/vi/VrejpCpibWc/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Choi Eun Young', 'Sand art - a wonderful artpiece that emerges from fingertips', 'https://www.youtube.com/watch?v=LBuJ1QRKsb0', 'https://img.youtube.com/vi/LBuJ1QRKsb0/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim A Ran', 'Beyond the boundaries between donors and donees', 'https://www.youtube.com/watch?v=w0mwB8eVa90', 'https://img.youtube.com/vi/w0mwB8eVa90/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Han Dong Heon', 'Let us all be speakers, right now! ', 'https://www.youtube.com/watch?v=tOEDTT_doL0', 'https://img.youtube.com/vi/tOEDTT_doL0/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 4회 TEDxSNU: Geek?', '외부의 환경에 굴하지 않고 자신의 뜻을 실현해 나가는 분들이 전하는 아이디어를 통해 그들의 삶과 열정을 체험하는 시간을 갖고자 한다. ', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Choi Byung Chul', 'Let us all be speakers, right now! ', 'https://www.youtube.com/watch?v=tOEDTT_doL0', 'https://img.youtube.com/vi/tOEDTT_doL0/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Beom Jun Kim', 'Physicist who studies any or all subjects of interest around him', 'https://www.youtube.com/watch?v=6sZRNYGSHN0', 'https://img.youtube.com/vi/6sZRNYGSHN0/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Jo Eun', 'A social activist who denied military service for his faith', 'https://www.youtube.com/watch?v=H9s01As9fKQ', 'https://img.youtube.com/vi/H9s01As9fKQ/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Koh Young', 'Butterfly Person', 'https://www.youtube.com/watch?v=mTZIasysHss', 'https://img.youtube.com/vi/mTZIasysHss/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Moon Hoon', 'Geek Architecture, An Impertivent Imagination against the Routine', 'https://www.youtube.com/watch?v=QSXgZ34JV88', 'https://img.youtube.com/vi/QSXgZ34JV88/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Ryu Jae Hyun', 'The Way to Solve the Generation Gap through Festival', 'https://www.youtube.com/watch?v=qSLPTU5Drs0', 'https://img.youtube.com/vi/qSLPTU5Drs0/mqdefault.jpg')
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 3회 TEDxSNU: Design', '디자인을 통해 발전을 이루어낸 연사들을 초청하여 디자인에 대한 그들의 시각을 공유하고, 우리 삶 속에서 디자인이 갖는 힘을 느끼고자 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Mi Huyn', 'Recycling design', 'https://www.youtube.com/watch?v=6U3ARVPcp94', 'https://img.youtube.com/vi/6U3ARVPcp94/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Sang Hyun', 'Calligraphic design of Korea', 'https://www.youtube.com/watch?v=UgPRVwqeCrc', 'https://img.youtube.com/vi/UgPRVwqeCrc/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Bang Hyun Woo', 'Technology and art, new media art', 'https://www.youtube.com/watch?v=wNaOtdAr59I', 'https://img.youtube.com/vi/wNaOtdAr59I/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Park Dong Chun', 'Designing global community', 'https://www.youtube.com/watch?v=UxCSq-fP5Aw', 'https://img.youtube.com/vi/UxCSq-fP5Aw/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Cho Dong Sung', 'Design management and management design ', 'https://www.youtube.com/watch?v=xCkzMIK5z90', 'https://img.youtube.com/vi/xCkzMIK5z90/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Jung Hae Jin', 'Designing korean food ', 'https://www.youtube.com/watch?v=W32iYcAScao', 'https://img.youtube.com/vi/W32iYcAScao/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Song Ju Chul', 'Design for public', 'https://www.youtube.com/watch?v=pF094Ezgt7E', 'https://img.youtube.com/vi/pF094Ezgt7E/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kim Young Se', 'Design centric business', 'https://www.youtube.com/watch?v=7Q5eGi_G3TY', 'https://img.youtube.com/vi/7Q5eGi_G3TY/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 2회 TEDxSNU: Entertainment', '엔터테인먼트에 대한 색다른 시각들을 소개함으로써 우리 삶의 즐거움과 관련한 새로운 생각들을 공유하고자 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Choi Ung Sik', 'Flourish Your Life with Technology', 'https://www.youtube.com/watch?v=4ikoJByVHDk', 'https://img.youtube.com/vi/4ikoJByVHDk/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Eun Young Seo', 'Open Your Life with Your Own "Style"', 'https://www.youtube.com/watch?v=WOTDO7viLxw', 'https://img.youtube.com/vi/WOTDO7viLxw/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Nam Moo Sung', 'Jazz, Variation on Your Life.', 'https://www.youtube.com/watch?v=kenKp_A7rAA', 'https://img.youtube.com/vi/enKp_A7rAA/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Oh Ha Yeon', 'Human Library : Books "Who" We Can Talk To', 'https://www.youtube.com/watch?v=-LInNBFem8o', 'https://img.youtube.com/vi/-LInNBFem8o/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Hilary V.', 'Design centric business', 'https://www.youtube.com/watch?v=7Q5eGi_G3TY', 'https://img.youtube.com/vi/7Q5eGi_G3TY/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Min Young', 'Rethink Our Travel', 'https://www.youtube.com/watch?v=T-zN9r02W4w', 'https://img.youtube.com/vi/T-zN9r02W4w/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Joo Chil Hwan', 'Death and revival in us', 'https://www.youtube.com/watch?v=u0zTHIjfcVY', 'https://img.youtube.com/vi/u0zTHIjfcVY/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Eung Il', 'DC inside and "ing-yeo" culture', 'https://www.youtube.com/watch?v=v6sIqQhQDv4', 'https://img.youtube.com/vi/v6sIqQhQDv4/mqdefault.jpg'),
            ]),
            new _event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]('제 1회 TEDxSNU: Techonolgy', '기술의 올바른 발전 방향에 대한 생각과 실제 적용 사례에 대한 이야기를 공유하고자 한다.', [
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kwon Jung Hyuk', 'Between Mobile and Web', 'https://www.youtube.com/watch?v=vxVmFtQSSvw', 'https://img.youtube.com/vi/vxVmFtQSSvw/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Kwon Do Kyun', 'Two new approaches lead technology to quantum Jump', 'https://www.youtube.com/watch?v=6rtqmHfJjP0', 'https://img.youtube.com/vi/6rtqmHfJjP0/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Hwang Reagan', 'Technology makes people happier', 'https://www.youtube.com/watch?v=vj0p2_i9UNw', 'https://img.youtube.com/vi/vj0p2_i9UNw/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Joon Hwan', 'Design Situationally Appropriate Interfaces', 'https://www.youtube.com/watch?v=HylMkTEUN9k', 'https://img.youtube.com/vi/HylMkTEUN9k/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Jung Ji Hoon', 'Quantum Jump into the Social Responsibility of the Technology', 'https://www.youtube.com/watch?v=YiewgbnHHjs', 'https://img.youtube.com/vi/YiewgbnHHjs/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Shin Hyun Uk', 'Petty Loan as a Web Service', 'https://www.youtube.com/watch?v=GPaU1XEFzTA', 'https://img.youtube.com/vi/GPaU1XEFzTA/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Jeon Seung Min', 'The Facebook Era', 'https://www.youtube.com/watch?v=gsGMm2yhYc0&t=7s', 'https://img.youtube.com/vi/gsGMm2yhYc0&t=7s/mqdefault.jpg'),
                new _thumbnail_model__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"]('Lee Jae Seok', 'How to Enhance Creativity through Technology and Humanities', 'https://www.youtube.com/watch?v=n_qmSuOP04E', 'https://img.youtube.com/vi/n_qmSuOP04E/mqdefault.jpg'),
            ]),
        ];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.event_id = this.route.snapshot.params['id'] - 1;
        this.paramsSubscription = this.route.params
            .subscribe(function (params) {
            _this.event_id = params['id'] - 1;
        });
    };
    EventsComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/events/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/events/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n    padding-bottom: 100px;\n}\n\n.pagination a {\n    color: black;\n    float: left;\n    padding: 6px 12px;\n    text-decoration: none;\n    transition: background-color .3s;\n\tfont-size: 15px;\n}\n\n.pagination a.active {\n    background-color: #e62b1e;\n    color: white;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n\n@media (max-width: 380px) {\n    .pagination a {\n        padding: 6px 12px;\n        font-size: 14px;\n    }\n\n    .pagination {\n        padding-bottom: 40px;\n    }\n}"

/***/ }),

/***/ "./src/app/events/pagination/pagination.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/pagination/pagination.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <div class=\"pagination\">\n      <a (click)=\"onClickPrev()\">\n          &laquo;\n      </a>\n      <a *ngFor=\"let event_id of event_ids\" \n        routerLink=\"/events/{{event_id}}\"\n        routerLinkActive=\"active\">\n        {{event_id}}\n      </a>\n      <a (click)=\"onClickNext()\">\n        &raquo;\n      </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/events/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(router, route) {
        this.router = router;
        this.route = route;
        this.shown_num = 8;
        this.event_ids = [];
        this.event_numbers = 16;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var i = Math.floor(+this.route.snapshot.params['id'] / (this.shown_num + 1)) * this.shown_num + 1;
        for (var j = i; j < i + this.shown_num; j++) {
            this.event_ids.push(j);
            if (j == this.event_numbers) {
                break;
            }
        }
    };
    PaginationComponent.prototype.onClickPrev = function () {
        var first = this.event_ids[0];
        if (first > 1) {
            this.event_ids = this.event_ids.slice(0, 0);
            var i = 1;
            for (; i <= this.shown_num; i++) {
                this.event_ids.push(first - this.shown_num - 1 + i);
            }
            this.router.navigate(['events', this.event_ids[0]]);
        }
    };
    PaginationComponent.prototype.onClickNext = function () {
        var last = this.event_ids[this.event_ids.length - 1];
        if (last < this.event_numbers) {
            // TODO : any other way to clear the array?
            this.event_ids = this.event_ids.slice(0, 0);
            var i = 1;
            for (; i <= this.shown_num; i++) {
                this.event_ids.push(last + i);
                if ((last + i) == this.event_numbers) {
                    break;
                }
            }
            this.router.navigate(['events', this.event_ids[0]]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "event_numbers", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/events/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/events/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/events/thumbnail.model.ts":
/*!*******************************************!*\
  !*** ./src/app/events/thumbnail.model.ts ***!
  \*******************************************/
/*! exports provided: Thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumbnail", function() { return Thumbnail; });
var Thumbnail = /** @class */ (function () {
    function Thumbnail(name, title, videoLink, imageLink) {
        this.name = name;
        this.title = title;
        this.videoLink = videoLink;
        this.imageLink = imageLink;
    }
    return Thumbnail;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand img {\n    width: auto;\n    height: 70px;\n}\n\n.navbar-brand {\n    padding-top: 5px;\n}\n\n.navbar-default {\n    background-color: black;\n    color: white;\n    height: 80px;\n    margin-bottom: 0px;\n    border-color: black;\n    border-radius: 0px;\n}\n\n.navbar-right {\n    padding-top: 24px;\n    margin-right: 10px;\n}\n\n.navbar-right a {\n    font-size: 16px;\n    padding-right: 5px;\n    color: #c6c6c6;\n}\n\n.navbar-right a:hover {\n    color: white;\n}\n\n.navbar-right a.active {\n    color: #e62b1e;\n}\n\n.navbar-toggler {\n    position: fixed;\n    top: 15px;\n    right: 15px;\n    display: none;\n}\n\n.navbar-toggler img {\n    width: 24px;\n}\n\n@media (max-width: 767px) {\n\n    .navbar-toggler {\n        display: block;\n        opacity: 0.7;\n    }\n\n\n.navbar-toggler:hover {\n    opacity: 1;\n}\n\n\n    .navbar-default {\n        height: 60px;\n    }\n\n    .navbar-brand img {\n        width: auto;\n        height: 50px;\n    }\n    \n    .navbar-brand {\n        padding-top: 5px;\n    }\n\n    #navbarNavDropdown {\n        background-color: black;\n        border: 0px;\n    }\n\n\n\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <a routerLink=\"/\" class=\"navbar-brand\" [ngClass]=\"{collapsed: !openHamburger }\"><img src=\"images/TEDxSNU_logo.png\" alt=\"\"></a>\n          <!-- <button \n            class=\"navbar-toggler\" \n            type=\"button\" \n            data-toggle=\"collapse\" \n            data-target=\"#navbarNavDropdown\" \n            aria-controls=\"navbarNavDropdown\" \n            aria-expanded=\"true\" \n            aria-label=\"Toggle navigation\"\n            (click)=\"onToggleHamburger()\" >\n                <img src=\"images/hamburger.png\" alt=\"\">\n          </button> -->\n          <a \n            class=\"navbar-toggler\" \n            (click)=\"onToggleHamburger()\" >\n                <img src=\"images/hamburger.png\" alt=\"\">\n          </a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\" [ngClass]=\"{in: openHamburger }\" >\n          <!-- or just navbar-default -->\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                  <a (click)=\"onToggleHamburger()\" \n                  routerLink=\"/home\" \n                  routerLinkActive=\"active\">\n                  About</a>\n                </li>\n              <li>\n                  <a (click)=\"onToggleHamburger()\"\n                  routerLink=\"/events/1\" \n                  routerLinkActive=\"active\">\n                  Events</a>\n                </li>\n              <li>\n                  <a (click)=\"onToggleHamburger()\"\n                  routerLink=\"/partners\" \n                  routerLinkActive=\"active\">\n                  Partnerships</a>\n                </li>\n              <li>\n                  <a (click)=\"onToggleHamburger()\"\n                  href='https://www.flickr.com'>\n                  Gallery</a>\n                </li>\n              <li>\n                  <a (click)=\"onToggleHamburger()\"\n                  routerLink=\"/tickets\"\n                  routerLinkActive=\"active\">\n                  News</a>\n                </li>\n          </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
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
        this.openHamburger = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnChanges = function () {
        this.openHamburger = false;
    };
    HeaderComponent.prototype.onToggleHamburger = function () {
        this.openHamburger = !this.openHamburger;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.about {\n    padding-left: 15%;\n\tpadding-right: 15%;\n\tpadding-top: 10px;\n\tpadding-bottom: 150px;\n\tdisplay: inline-block;\n\tbackground-color: #FFFFFF;\n\tmargin-top: 0px;\n\ttext-align: center;\n\tline-height: 1.7;\n}\n\n.about h2 {\n    font-size: 40px;\n    margin-top: 60px;\n}\n\n.about h2 strong {\n    color: #e62b1e;\n}\n\n.about p {\n    font-size: 20px;\n}\n\n@media (max-width: 767px) {\n    img {\n        margin-top: 30px;\n    }\n}\n\n@media (max-width: 380px) {\n\t.about p {\n\t\tfont-size: 16px;\n\t}\n\n\t.about h2 {\n\t\tfont-size: 30px;\n\t}\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"images/tedxsnu_fixed_narrow.png\" class=\"img-fluid\" alt=\"Responsive image\" width= \"100%\"/>\n<div class=\"about\">\n    <h2>About <strong>TED</strong></h2>\n    <p>TED는 ‘Ideas worth spreading(널리 퍼트릴 만한 아이디어)’이라는 슬로건 아래 열리는 세계 최대 규모의 지식 공유 컨퍼런스입니다. 1984년 미국에서 비영리 재단으로 창립된 것을 그 시초로 하며, 1990년도부터는 Technology, Entertainment, Design을 포함한 다양한 분야의 전문가들을 초청, 그들이 가진 영감을 공유해오고 있습니다. 최대 18분 동안 전달된 아이디어는 전 세계 수백만 명의 TED 커뮤니티 구성원들이 가진 발전을 향한 열린 사고와 열정과 합해져, 세상을 바꿀 새로운 움직임이 되고 있습니다.</p>\n    <h2>About <strong>TEDx</strong></h2>\n    <p>TEDx는 TED에서 운영하고 있는 여러 프로그램 중의 하나로, TEDx의 ‘x’는 ‘independently organized (독립적으로 개최되는)’를 의미합니다. TED의 모토에 공감하는 사람들이 지역 사회 구성원에게 TED스러운 경험과 영감을 제공하기 위한 목적으로 조직하며, 규모가 커진 TED에게서 기대하기 어려운 조금 더 직접적이고 감성적인 소통의 장을 제공합니다.</p>\n    <p>현재 전 세계 150개국에서 총 9000개가 넘는 TEDx 커뮤니티가 생겼으며, 우리나라에서도 2009년 TEDxMyungdong을 시작으로, TEDxSNU, TEDxSeoul, TEDxDaejeon, TEDxBusan 등 수십 개의 TEDx가 형성, 운영되고 있습니다</p>\n    <h2>About <strong>TEDx</strong>SNU</h2>\n    <p>TEDxSNU(서울대학교)는 서울대학교와 관악구 기반의 TEDx로, TED talks 프로그램을 진행함으로써 가치 있는 생각을 전파합니다. 영감의 확신은 서울대학교와 관악구에서 출발하여, 서울과 대한민국, 나아가 전 세계로까지 퍼져나갈 것입니다. TEDxSNU 커뮤니티는 이러한 움직임에 가슴 설레하는 사람들로 구성되어 있으며, 지식공유를 통해 현대 사회에 또 다른 울림을 전하고자 합니다.</p>\n    <p>2011년 3월에 첫 번째 행사 이후, TEDxSNU는 8년째 계속되고 있습니다. Technology, Entertainment, Design, Geek?, Link 등의 주제로 개최되었으며 80명 이상의 연사들께서 본인의 가치있는 생각을 전파해주셨습니다.</p>  \n</div>"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    margin-top: 300px;\n    margin-bottom: 400px;\n    margin-left: 24%;\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  page not found!\n</h3>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners {\n    padding-left: 15%;\n\tpadding-right: 15%;\n\tpadding-top: 10px;\n\tpadding-bottom: 50px;\n\tdisplay: block;\n\tbackground-color: #FFFFFF;\n\tmargin-top: 0px;\n\tline-height: 1.7;\n}\n\n\n.partners h1 {\n\tcolor: #e62b1e;\n}\n\n\n@media (max-width: 767px) {\n    img {\n        margin-top: 30px;\n    }\n}\n\n"

/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <img src=\"images/banner1.png\" width=\"90%\" alt=\"\"/>\n</div>\n\n<div class=\"partners\">\n    <h1>Partners</h1>\n    <hr>\n    <div *ngFor=\"let sponsor of sponsors\">\n        <h2>{{sponsor.title}}</h2>\n        <div align=\"center\">\n            <img src=\"{{sponsor.path}}\" alt=\"\" width=\"100%\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
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

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
        this.sponsors = [
            { title: "TEDxSNU 2018 Fall Event", path: "images/2018_fall_sponsor.jpeg" }
        ];
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/tickets/tickets.component.css":
/*!***********************************************!*\
  !*** ./src/app/tickets/tickets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paragraph {\n\tmargin-top: 160px;\n\tmargin-bottom: 200px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n.paragraph h1 {\n\ttext-align: center;\n\tmargin-left: 25px;\n\tmargin-right: 25px;\n}\n\n.paragraph h1 strong {\n\tcolor: red;\n}"

/***/ }),

/***/ "./src/app/tickets/tickets.component.html":
/*!************************************************!*\
  !*** ./src/app/tickets/tickets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"paragraph\" align=\"center\">\n  <!-- <h1>\"   <strong>2018 Fall TEDxSNU</strong> will be held soon!   \"</h1> -->\n  <a href=\"https://docs.google.com/document/d/11beQelaXhIc90SgkrcuSGbMY-RA9HX92QwjWGmjTTGY/edit?usp=sharing\">\n    <img src=\"images/2019_1_recruit.png\" alt=\"\" width=\"60%\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/tickets/tickets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
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

var TicketsComponent = /** @class */ (function () {
    function TicketsComponent() {
    }
    TicketsComponent.prototype.ngOnInit = function () {
    };
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.css */ "./src/app/tickets/tickets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TicketsComponent);
    return TicketsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leesoojeong/Desktop/tedxsnu_web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
