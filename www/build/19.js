webpackJsonp([19],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTmPageModule", function() { return HomeTmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tm__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeTmPageModule = (function () {
    function HomeTmPageModule() {
    }
    HomeTmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_tm__["a" /* HomeTmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_tm__["a" /* HomeTmPage */]),
            ],
        })
    ], HomeTmPageModule);
    return HomeTmPageModule;
}());

//# sourceMappingURL=home-tm.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomeTmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeTmPage = (function () {
    function HomeTmPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        setTimeout(this.checkLogin(), 1000);
        this.tasks = [
            { "nome": "Task 1", "descrizione": "Questa è la descrizione del task 1" },
            { "nome": "Task 2", "descrizione": "Questa è la descrizione del task 2" },
            { "nome": "Task 3", "descrizione": "Questa è la descrizione del task 3" }
        ];
        this.notifiche = [
            { "titolo": "Task", "descrizione": "Ti è stato assegnato un nuovo task", "data": "03/01/2018" },
            { "titolo": "Comunicazione Ore", "descrizione": "Le ore comunicate per il Task 1 sono state accettate", "data": "02/01/2018" },
            { "titolo": "Comunicazione Ore", "descrizione": "Le ore comunicate per il Task 2 sono state rifiutate", "data": "01/01/2018" },
        ];
    }
    HomeTmPage.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get('username').then(function (name) {
            if (name == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
            }
            else {
                _this.username = name;
                console.log(_this.username);
            }
        });
    };
    HomeTmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tm',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-tm/home-tm.html"*/'<!--\n  Generated template for the HomeTmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home TM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <ion-item *ngFor="let task of tasks">\n      <h2><strong>{{task.nome}}</strong></h2>\n      <h4>{{task.descrizione}}</h4>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-tm/home-tm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomeTmPage);
    return HomeTmPage;
}());

//# sourceMappingURL=home-tm.js.map

/***/ })

});
//# sourceMappingURL=19.js.map