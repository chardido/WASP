webpackJsonp([21],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvalidaOreListaPageModule", function() { return ConvalidaOreListaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convalida_ore_lista__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConvalidaOreListaPageModule = (function () {
    function ConvalidaOreListaPageModule() {
    }
    ConvalidaOreListaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__convalida_ore_lista__["a" /* ConvalidaOreListaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__convalida_ore_lista__["a" /* ConvalidaOreListaPage */]),
            ],
        })
    ], ConvalidaOreListaPageModule);
    return ConvalidaOreListaPageModule;
}());

//# sourceMappingURL=convalida-ore-lista.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvalidaOreListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ConvalidaOreListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConvalidaOreListaPage = (function () {
    function ConvalidaOreListaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.oreInviate = [
            { "nomeUtente": "Carlo Di Domenico", "nomeAttivita": "RAD", ore: 13 },
            { "nomeUtente": "Fabiano Pecorelli", "nomeAttivita": "SDD", ore: 9 },
            { "nomeUtente": "Umberto Picariello", "nomeAttivita": "ODD", ore: 10 }
        ];
    }
    ConvalidaOreListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConvalidaOreListaPage');
    };
    ConvalidaOreListaPage.prototype.convalidaOre = function (nomeUtente, ore) {
        var alert = this.alertCtrl.create({
            title: 'Convalida Ore',
            message: nomeUtente + " ha dichiarato " + ore + " ore. <br> Vuoi convalidargliele?",
            buttons: [
                {
                    text: 'Convalida',
                    role: 'cancel',
                    handler: function () {
                        console.log('Convalida');
                    }
                },
                {
                    text: 'Non convalidare',
                    handler: function () {
                        console.log('Non convalida');
                    }
                }
            ]
        });
        alert.present();
    };
    ConvalidaOreListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-convalida-ore-lista',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/convalida-ore-lista/convalida-ore-lista.html"*/'<!--\n  Generated template for the ConvalidaOreListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Convalida Ore</ion-title>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona le ore inviate da voler convalidare\n  </p>\n  <br>\n  <ion-list>\n    <button (click)="convalidaOre(ore.nomeUtente, ore.ore)" ion-item *ngFor="let ore of oreInviate">\n      <h2>{{ore.nomeUtente}}</h2>\n      <h4>Attivit&agrave;: <strong>{{ore.nomeAttivita}}</strong></h4>\n      <h6>Ore inviate: {{ore.ore}}</h6>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/convalida-ore-lista/convalida-ore-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConvalidaOreListaPage);
    return ConvalidaOreListaPage;
}());

//# sourceMappingURL=convalida-ore-lista.js.map

/***/ })

});
//# sourceMappingURL=21.js.map