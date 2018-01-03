webpackJsonp([18],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvioOrePageModule", function() { return InvioOrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invio_ore__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvioOrePageModule = (function () {
    function InvioOrePageModule() {
    }
    InvioOrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invio_ore__["a" /* InvioOrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invio_ore__["a" /* InvioOrePage */]),
            ],
        })
    ], InvioOrePageModule);
    return InvioOrePageModule;
}());

//# sourceMappingURL=invio-ore.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvioOrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the InvioOrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvioOrePage = (function () {
    function InvioOrePage(navCtrl, navParams, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertControl = alertControl;
        this.taskSelezionato = this.navParams.get("task");
    }
    InvioOrePage.prototype.comunicaOre = function () {
        if (this.oreInserite != null) {
            var alert_1 = this.alertControl.create({
                title: 'Ore comunicate',
                subTitle: ' Le ore sono state comunicate con successo.',
                buttons: ['Continua']
            });
            alert_1.present();
            console.log("Comunicate " + this.oreInserite + " ore per il task: " + this.taskSelezionato);
        }
    };
    InvioOrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invio-ore',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore/invio-ore.html"*/'<!--\n  Generated template for the InvioOrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comunica ore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci le ore da comunicare al Project Manager\n  </p>\n  <form (ngSubmit)="comunicaOre()">\n    <ion-item>\n      <ion-label>Ore</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="oreInserite" name="ore"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Comunica ore</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore/invio-ore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InvioOrePage);
    return InvioOrePage;
}());

//# sourceMappingURL=invio-ore.js.map

/***/ })

});
//# sourceMappingURL=18.js.map