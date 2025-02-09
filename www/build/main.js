webpackJsonp([20],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungimemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_progetto_home_progetto__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AggiungimemberPage = (function () {
    function AggiungimemberPage(navCtrl, navParams, storage, alertControl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.http = http;
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            _this.chiamataGet();
        });
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    AggiungimemberPage.prototype.getItems = function (searchbar) {
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.utenti = this.utenti.filter(function (v) {
            if (v.username && q) {
                if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AggiungimemberPage.prototype.chiamataGet = function () {
        var _this = this;
        this.http.get("http://localhost:8888/WASP/apiListaTeamMember.php").map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.utenti = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AggiungimemberPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null) {
                console.log("Seleziona il progetto prima di procedere");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
            else {
                console.log("Aggiungi membro a progetto: " + progetto);
                _this.progetto = { nome: progetto, codice: "" };
            }
        });
    };
    AggiungimemberPage.prototype.aggiungiUtente = function (username) {
        var _this = this;
        var alert = this.alertControl.create({
            title: 'Team Member aggiunto!',
            subTitle: username.toUpperCase() + ' è stato aggiunto al progetto: ' + this.codiceProgetto,
            buttons: ['OK']
        });
        var alertError = this.alertControl.create({
            title: username.toUpperCase() + ' è già associato al progetto ' + this.codiceProgetto + "!",
            buttons: ['OK']
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            user: username,
            codiceProgetto: this.codiceProgetto,
        };
        this.http.post("http://localhost:8888/WASP/apiAggiungiTeamMemberProgetto.php", postParams, options)
            .subscribe(function (data) {
            if (data['_body'] == 1) {
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_progetto_home_progetto__["a" /* HomeProgettoPage */]);
                console.log("Aggiungo: " + username + " al progetto: " + _this.progetto.nome);
            }
            else {
                alertError.present();
                console.log("Ci sono stati dei problemi durante l'aggiunta del nuovo team member!");
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AggiungimemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aggiungimember',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/aggiungimember/aggiungimember.html"*/'<!--\n  Generated template for the AggiungimemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aggiungi Team Member</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar placeholder="Cerca Utente Per Username" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <div padding>\n    <p text-center>\n      Aggiungi un Team Member al tuo progetto!\n    </p>\n\n    <ion-list>\n      <button ion-item (click)="aggiungiUtente(utente.username)" *ngFor="let utente of utenti">\n        <h2> <strong>{{ utente.username | uppercase}} </strong></h2>\n       <h3 class="alto"> {{ utente.nome }} {{utente.cognome}} </h3>\n      </button>\n    </ion-list>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/aggiungimember/aggiungimember.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], AggiungimemberPage);
    return AggiungimemberPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=aggiungimember.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPersonaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
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
 * Generated class for the AssegnaTaskPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssegnaTaskPersonaPage = (function () {
    function AssegnaTaskPersonaPage(navCtrl, navParams, alertControl, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertControl = alertControl;
        this.storage = storage;
        this.http = http;
        this.nomeTask = this.navParams.get("nomeTask");
        this.codiceTask = this.navParams.get("codiceTask");
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            _this.chiamataPost();
        });
    }
    AssegnaTaskPersonaPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto,
        };
        this.http.post("http://localhost:8888/WASP/apiListaMembriAssociatiAlProgetto.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.utenti = data;
            console.log(_this.utenti);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AssegnaTaskPersonaPage.prototype.assegnaTask = function (username) {
        var _this = this;
        var alert = this.alertControl.create({
            title: 'Task Assegnato',
            subTitle: 'Il task ' + this.nomeTask + ' è stato assegnato a ' + username.toUpperCase() + '.',
            buttons: ['Continua']
        });
        var alertError = this.alertControl.create({
            title: (username).toUpperCase() + ' è già associato a questo Task!',
            buttons: ['OK']
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            user: username,
            codiceProgetto: this.codiceProgetto,
            codiceTask: this.codiceTask
        };
        this.http.post("http://localhost:8888/WASP/apiAssegnaTaskAlMember.php", postParams, options)
            .subscribe(function (data) {
            if (data['_body'] == 1) {
                alert.present();
                console.log("Task: " + _this.nomeTask + " assegnato a: " + username);
            }
            else {
                alertError.present();
                console.log("Ci sono stati dei problemi durante l'associazione del task!");
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AssegnaTaskPersonaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assegna-task-persona',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/'<!--\n  Generated template for the AssegnaTaskPersonaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il Team Member a cui assegnare il task <strong>{{nomeTask}}</strong>\n  </p>\n  <br>\n\n  <ion-list>\n    <button ion-item (click)="assegnaTask(utente.user)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome | uppercase}} {{utente.cognome | uppercase}} </strong></h2>\n      <h3> {{ utente.user | uppercase}} </h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costo }}€</strong></h4>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], AssegnaTaskPersonaPage);
    return AssegnaTaskPersonaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=assegna-task-persona.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assegna_task_persona_assegna_task_persona__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the AssegnaTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssegnaTaskPage = (function () {
    function AssegnaTaskPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            _this.chiamataPost();
        });
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    AssegnaTaskPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null) {
                console.log("Seleziona il progetto prima di procedere");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
        });
    };
    AssegnaTaskPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto,
        };
        this.http.post("http://localhost:8888/WASP/apiListaTasks.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    //todo - al posto del task gli sarà passato l'id
    AssegnaTaskPage.prototype.assegnaTask = function (task, wbs) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assegna_task_persona_assegna_task_persona__["a" /* AssegnaTaskPersonaPage */], { "nomeTask": task, "codiceTask": wbs });
        console.log("Task selezionato: " + task + ", codiceTask: " + wbs);
    };
    AssegnaTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assegna-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task/assegna-task.html"*/'<!--\n  Generated template for the AssegnaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<p text-center>\n  Seleziona il task da assegnare tra quelli disponibili\n</p>\n  <br>\n  <ion-list>\n    <button ion-item (click)="assegnaTask(task.attivita, task.wbs)" *ngFor="let task of tasks">\n      <h2> <strong>{{ task.attivita}} </strong></h2>\n      <h3> {{ task.dataInizio | date:"medium" }} </h3>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task/assegna-task.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], AssegnaTaskPage);
    return AssegnaTaskPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=assegna-task.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvalidaOreListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
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
    function ConvalidaOreListaPage(navCtrl, navParams, storage, alertControl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.http = http;
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            _this.chiamataPost();
        });
    }
    ConvalidaOreListaPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto
        };
        this.http.post("http://localhost:8888/WASP/apiListaOreComunicate.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.oreInviate = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ConvalidaOreListaPage.prototype.convalidaOre = function (userUtente, ore, attivita, idTask) {
        var _this = this;
        var alert = this.alertControl.create({
            title: 'Convalida Ore',
            message: userUtente + " ha dichiarato <strong>" + ore + "</strong> ore per il task: " + attivita + ". <br> Vuoi convalidargliele?",
            buttons: [
                {
                    text: 'Convalida',
                    role: 'cancel',
                    handler: function () {
                        console.log('Convalida');
                        _this.chiamataPostConvalida(idTask, userUtente, attivita);
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
    ConvalidaOreListaPage.prototype.chiamataPostConvalida = function (idTask, user, attivita) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            idTask: idTask,
            user: user
        };
        this.http.post("http://localhost:8888/WASP/apiConvalidaOre.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data['_body'] == 1) {
                var alert = _this.alertControl.create({
                    title: 'Ore Convalidate!',
                    subTitle: 'Ore convalidate per il task ' + attivita + '.',
                    buttons: ['Ok']
                });
                alert.present();
            }
            else {
                console.log("Errore convalida");
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ConvalidaOreListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-convalida-ore-lista',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/convalida-ore-lista/convalida-ore-lista.html"*/'<!--\n  Generated template for the ConvalidaOreListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Convalida Ore</ion-title>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il task e convalida le ore.\n  </p>\n  <br>\n  <ion-list>\n    <button (click)="convalidaOre(ore.user, ore.oreComunicate, ore.attivita, ore.idTask)" ion-item *ngFor="let ore of oreInviate">\n      <h2>{{ore.user | uppercase}}</h2>\n      <h4>Attivit&agrave;: <strong>{{ore.attivita}}</strong></h4>\n      <h6>Ore inviate: {{ore.oreComunicate}}</h6>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/convalida-ore-lista/convalida-ore-lista.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], ConvalidaOreListaPage);
    return ConvalidaOreListaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=convalida-ore-lista.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
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
 * Generated class for the CreaProgettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreaProgettoPage = (function () {
    function CreaProgettoPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.storage.get('username').then(function (val) {
            _this.userDaPassare = val;
        });
    }
    CreaProgettoPage.prototype.creaProgetto = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            nome: this.nomeProgetto,
            user: this.userDaPassare
        };
        this.http.post("http://localhost:8888/WASP/apiCreaProgetto.php", postParams, options)
            .subscribe(function (data) {
            if (data['_body'] == "0") {
                console.log("Progetto non creato!");
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__["a" /* HomeProgettoPage */], { "nome": _this.nomeProgetto, "codice": data['_body'] });
                _this.storage.set("progetto", _this.nomeProgetto);
                _this.storage.set("codProgetto", data['_body']);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    CreaProgettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crea-progetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-progetto/crea-progetto.html"*/'<!--\n  Generated template for the CreaProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nome del progetto <br>\n    Successivamente recati alla <a href="www.google.it">pagina</a> e importa il progetto in formato XML.\n  </p>\n  <form (ngSubmit)="creaProgetto()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Nome progetto</ion-label>\n      <ion-input type="text" [(ngModel)]="nomeProgetto" name="nome"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea progetto</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-progetto/crea-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], CreaProgettoPage);
    return CreaProgettoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=crea-progetto.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_progetto_home_progetto__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreaTaskPage = (function () {
    function CreaTaskPage(navCtrl, navParams, storage, alertControl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.http = http;
        this.task = { wbs: '', attivita: '', dataInizio: '' };
        this.task.dataInizio = new Date().toISOString();
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
        });
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    CreaTaskPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null) {
                console.log("Seleziona il progetto prima di procedere");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
        });
    };
    CreaTaskPage.prototype.creaTask = function () {
        var _this = this;
        if (this.task.attivita != "" && this.task.dataInizio != "") {
            var alert_1 = this.alertControl.create({
                title: 'Task Creato!',
                subTitle: 'Il task ' + this.task.attivita + ' è stato creato correttamente.',
                buttons: ['Continua']
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                codiceProgetto: this.codiceProgetto,
                attivita: this.task.attivita,
                dataInizio: this.task.dataInizio
            };
            this.http.post("http://localhost:8888/WASP/apiAggiungiTask.php", postParams, options)
                .subscribe(function (data) {
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_progetto_home_progetto__["a" /* HomeProgettoPage */]);
                //console.log("Nuovo task: "+this.task.attivita+ "; Data: "+this.task.dataInizio);
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    CreaTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crea-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-task/crea-task.html"*/'<!--\n  Generated template for the CreaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p text-center>\n  Riempi i campi sottostanti e aggiungi un nuovo task al progetto.\n</p>\n\n  <form (ngSubmit)="creaTask()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-textarea [(ngModel)]="task.attivita" name="attivita" placeholder="Inserisci nome attività"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Data Inizio</ion-label>\n      <ion-datetime displayFormat="MM DD YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="task.dataInizio" name="dataInizio" >\n      </ion-datetime>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea Task</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-task/crea-task.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], CreaTaskPage);
    return CreaTaskPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=crea-task.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettaglioTaskPage; });
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
 * Generated class for the DettaglioTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DettaglioTaskPage = (function () {
    function DettaglioTaskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nomeProgetto = this.navParams.get("nomeProgetto");
        this.attivita = this.navParams.get("attivita");
        this.dataInizio = this.navParams.get("dataInizio");
        this.oreComunicate = this.navParams.get("oreComunicate");
    }
    DettaglioTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettaglio-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/dettaglio-task/dettaglio-task.html"*/'<!--\n  Generated template for the DettaglioTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ attivita }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <h2 text-center="">Dettaglio task</h2>\n    <ion-item>\n      <h4> Progetto <span float-right><strong>{{ nomeProgetto | uppercase}} </strong></span></h4>\n    </ion-item>\n    <ion-item>\n      <h4> Attivita <span float-right><strong>{{ attivita | uppercase}} </strong></span></h4>\n    </ion-item>\n    <ion-item>\n      <h4>Data Inizio <span float-right><strong>{{ dataInizio | date:"medium"}}</strong></span></h4>\n    </ion-item>\n    <h2 text-center="" [hidden]="!oreComunicate">Task Completato</h2>\n    <ion-item [hidden]="!oreComunicate">\n      <h4> Ore Comunicate <span float-right><strong>{{ oreComunicate | uppercase}} </strong></span></h4>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/dettaglio-task/dettaglio-task.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], DettaglioTaskPage);
    return DettaglioTaskPage;
    var _a, _b;
}());

//# sourceMappingURL=dettaglio-task.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.events = events;
        this.login = { username: '', password: '' };
    }
    LoginPage.prototype.logForm = function () {
        var _this = this;
        if (this.login.username != "" && this.login.password != "") {
            //effettuare il controllo
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                username: this.login.username,
                password: this.login.password,
            };
            this.http.post("http://localhost:8888/WASP/apiLogin.php", postParams, options)
                .subscribe(function (data) {
                if (data['_body'] == "PM") {
                    _this.storage.set('username', _this.login.username);
                    _this.storage.set('posizione', "PM");
                    _this.events.publish('user:pm');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else if (data['_body'] == "TM") {
                    _this.events.publish('user:tm');
                    _this.storage.set('username', _this.login.username);
                    _this.storage.set('posizione', "TM");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__["a" /* HomeTmPage */]);
                }
                else {
                    console.log("Inserisci username e/o password CORRETTI");
                }
                //console.log(data);
            }, function (error) {
                console.log(error); // Error getting the data
            });
            //this.navCtrl.setRoot(HomePage);
            //console.log(this.login);
        }
        else {
            console.log("Inserisci username e/o password");
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Accedi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="login.username" name="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="login.password" name="title"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Accedi</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, storage, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.events = events;
        this.signup = { username: '', password: '', nome: '', cognome: '', tipo: 0 };
    }
    SignupPage.prototype.logForm = function () {
        var _this = this;
        if (this.signup.username != "" && this.signup.password != "" && this.signup.nome != "" && this.signup.cognome != "") {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                nome: this.signup.nome,
                cognome: this.signup.cognome,
                username: this.signup.username,
                password: this.signup.password,
                tipo: this.signup.tipo,
            };
            this.http.post("http://localhost:8888/WASP/apiRegistraUtente.php", postParams, options)
                .subscribe(function (data) {
                if (data['_body'] == 1) {
                    _this.storage.set('username', _this.signup.username);
                    _this.storage.set('posizione', _this.signup.tipo);
                    if (_this.signup.tipo == 0) {
                        _this.events.publish('user:pm');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.events.publish('user:tm');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__["a" /* HomeTmPage */]);
                    }
                }
                else {
                    console.log(data['_body']);
                    console.log("Errore durante la registrazione!");
                }
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
        else {
            console.log("Controlla di aver completato tutti i campi");
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrati</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cognome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.cognome" name="cognome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signup.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="signup.tipo" name="select">\n        <ion-option value="0">Project Manager</ion-option>\n        <ion-option value="1">Team Member</ion-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Registrati</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvioOreSelTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invio_ore_invio_ore__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
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
 * Generated class for the InvioOreSelTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvioOreSelTaskPage = (function () {
    function InvioOreSelTaskPage(navCtrl, navParams, storage, http, alertControl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.alertControl = alertControl;
        this.storage.get('username').then(function (name) {
            _this.username = name;
            _this.chiamataPost();
        });
    }
    InvioOreSelTaskPage.prototype.inviaOre = function (username, task, idTask, oreComunicate) {
        if (oreComunicate == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invio_ore_invio_ore__["a" /* InvioOrePage */], { "username": username, "task": task, "idTask": idTask });
        }
        else {
            var alert = this.alertControl.create({
                title: 'Ore già comunicate!',
                subTitle: ' Ore comunicate al Project Manager: <strong>' + oreComunicate + '</strong>.<br/> In attesa di convalida.',
                buttons: ['Ok']
            });
            alert.present();
        }
        //console.log("Selezionato: "+task+ ", IdTask:" + idTask);
    };
    InvioOreSelTaskPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            username: this.username
        };
        this.http.post("http://localhost:8888/WASP/apiTasksInCorsoTeamMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    InvioOreSelTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invio-ore-sel-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore-sel-task/invio-ore-sel-task.html"*/'<!--\n  Generated template for the InvioOreSelTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Comunica ore</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il task per la quale desideri comunicare le ore\n  </p>\n  <br>\n  <ion-list>\n    <button ion-item (click)="inviaOre(username ,task.nome, task.idTask, task.oreComunicate)" *ngFor="let task of tasks">\n      <h2> Progetto <strong>{{ task.nome}} </strong></h2>\n      <h3> <strong>{{ task.attivita }}</strong> <!--<span [hidden]="!task.oreComunicate" class="right">Ore già comunicate!</span>--></h3>\n      <h3> {{ task.dataInizio | date:"medium" }} </h3>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore-sel-task/invio-ore-sel-task.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], InvioOreSelTaskPage);
    return InvioOreSelTaskPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=invio-ore-sel-task.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvioOrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tm_home_tm__ = __webpack_require__(40);
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
    function InvioOrePage(navCtrl, navParams, alertControl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertControl = alertControl;
        this.http = http;
        this.taskSelezionato = this.navParams.get("task");
        this.idTaskSelezonato = this.navParams.get("idTask");
        this.username = this.navParams.get("username");
    }
    InvioOrePage.prototype.comunicaOre = function () {
        var _this = this;
        if (this.oreInserite != null) {
            var alert_1 = this.alertControl.create({
                title: 'Ore comunicate!',
                subTitle: ' Ore comunicate al Project Manager: <strong>' + this.oreInserite + '</strong>.',
                buttons: ['Ok']
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                idTask: this.idTaskSelezonato,
                ore: this.oreInserite,
                user: this.username
            };
            this.http.post("http://localhost:8888/WASP/apiInviaOre.php", postParams, options)
                .subscribe(function (data) {
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_tm_home_tm__["a" /* HomeTmPage */]);
                //console.log("Comunicate "+this.oreInserite+" ore per il task: "+this.taskSelezionato);
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    InvioOrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invio-ore',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore/invio-ore.html"*/'<!--\n  Generated template for the InvioOrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comunica ore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci le ore da comunicare al Project Manager\n  </p>\n  <form (ngSubmit)="comunicaOre()">\n    <ion-item>\n      <ion-label>Ore</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="oreInserite" name="ore"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Comunica ore</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/invio-ore/invio-ore.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], InvioOrePage);
    return InvioOrePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=invio-ore.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaBudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_progetto_home_progetto__ = __webpack_require__(33);
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
 * Generated class for the ModificaBudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaBudgetPage = (function () {
    function ModificaBudgetPage(navCtrl, navParams, storage, alertControl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.http = http;
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            ;
        });
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    ModificaBudgetPage.prototype.modificaBudget = function () {
        var _this = this;
        if (this.nuovoBudget != null) {
            var alert_1 = this.alertControl.create({
                title: 'Budget Aggiornato!',
                subTitle: 'Nuovo budget: ' + this.nuovoBudget + "€",
                buttons: ['Ok']
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                codice: this.codiceProgetto,
                budget: this.nuovoBudget
            };
            this.http.post("http://localhost:8888/WASP/apiAggiornaBudgetProgetto.php", postParams, options)
                .subscribe(function (data) {
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_progetto_home_progetto__["a" /* HomeProgettoPage */]);
            }, function (error) {
                console.log(error); // Error getting the data
            });
            console.log("Nuovo budget: " + this.nuovoBudget + "€");
        }
    };
    ModificaBudgetPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null && _this.nomeProgetto == null) {
                console.log("NON HAI SCELTO");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
            else {
                _this.nomeProgetto = progetto;
                console.log("Progetto aperto: " + progetto);
            }
        });
    };
    ModificaBudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-budget',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-budget/modifica-budget.html"*/'<!--\n  Generated template for the ModificaBudgetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aggiorna Budget</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nuovo budget per il progetto: <strong>{{nomeProgetto | uppercase}}</strong>\n  </p>\n\n  <form (ngSubmit)="modificaBudget()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Budget</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoBudget" name="budget"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Aggiorna Budget</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-budget/modifica-budget.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], ModificaBudgetPage);
    return ModificaBudgetPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=modifica-budget.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRicavoRisorsaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizza_members_visualizza_members__ = __webpack_require__(54);
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
 * Generated class for the ModificaRicavoRisorsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaRicavoRisorsaPage = (function () {
    function ModificaRicavoRisorsaPage(navCtrl, navParams, http, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertControl = alertControl;
        this.nomeMember = this.navParams.get("nome");
        this.usernameMember = this.navParams.get("username");
    }
    ModificaRicavoRisorsaPage.prototype.modifica = function () {
        this.chiamataPost();
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */]);
    };
    ModificaRicavoRisorsaPage.prototype.chiamataPost = function () {
        var alert = this.alertControl.create({
            title: 'Ricavo Team Member Aggiornato!',
            subTitle: 'Il nuovo ricavo per ' + this.nomeMember.toUpperCase() + ' è: ' + this.nuovoRicavo + '.',
            buttons: ['Ok']
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            ricavo: this.nuovoRicavo,
            user: this.usernameMember
        };
        this.http.post("http://localhost:8888/WASP/apiAggiornaRicavoMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert.present();
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ModificaRicavoRisorsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-ricavo-risorsa',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/'<!--\n  Generated template for the ModificaRicavoRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Aggiorna Ricavo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Ricavo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoRicavo" name="ricavo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Aggiorna Ricavo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ModificaRicavoRisorsaPage);
    return ModificaRicavoRisorsaPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=modifica-ricavo-risorsa.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifica_risorsa_modifica_risorsa__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(14);
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
 * Generated class for the ProfiloMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfiloMemberPage = (function () {
    function ProfiloMemberPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.usernameMembro = this.navParams.get("user");
        this.cognomeMembro = this.navParams.get("cognome");
        this.nomeMembro = this.navParams.get("nome");
        this.costoMembro = this.navParams.get("costo");
        this.ruoloMembro = this.navParams.get("ruolo");
        this.ricavoMembro = this.navParams.get("ricavo");
        this.storage.get('codProgetto').then(function (cod) {
            _this.codiceProgetto = cod;
            _this.chiamataPost();
        });
    }
    ProfiloMemberPage.prototype.modificaCosto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modifica_risorsa_modifica_risorsa__["a" /* ModificaRisorsaPage */], { "nome": this.nomeMembro, "username": this.usernameMembro });
    };
    ProfiloMemberPage.prototype.modificaRicavo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */], { "nome": this.nomeMembro, "username": this.usernameMembro });
    };
    ProfiloMemberPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto,
            username: this.usernameMembro
        };
        this.http.post("http://localhost:8888/WASP/apiListaTasksTeamMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ProfiloMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo-member',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/profilo-member/profilo-member.html"*/'<!--\n  Generated template for the ProfiloMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h2>Informazioni</h2>\n    <ion-item>\n      <h4> Nome <span float-right><strong>{{ nomeMembro | uppercase}} </strong></span></h4>\n    </ion-item>\n    <ion-item>\n      <h4> Cognome <span float-right><strong>{{ cognomeMembro | uppercase }} </strong></span></h4>\n    </ion-item>\n    <button ion-item (click)="modificaCosto()">\n      <h4>Costo <span float-right><strong>{{ costoMembro }}€/gg</strong></span></h4>\n    </button>\n    <button ion-item (click)="modificaRicavo()">\n      <h4>Ricavo <span float-right><strong>{{ ricavoMembro }}€/gg</strong></span></h4>\n    </button>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <ion-item *ngFor="let task of tasks">\n      <h2>{{task.attivita | uppercase}}</h2>\n      <h4>Progetto: {{task.nome | uppercase}}</h4>\n      <h6>Iniziato: {{task.dataInizio | date:"medium"}}</h6>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/profilo-member/profilo-member.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], ProfiloMemberPage);
    return ProfiloMemberPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profilo-member.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRisorsaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizza_members_visualizza_members__ = __webpack_require__(54);
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
 * Generated class for the ModificaRisorsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaRisorsaPage = (function () {
    function ModificaRisorsaPage(navCtrl, navParams, http, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertControl = alertControl;
        this.nomeMember = this.navParams.get("nome");
        this.usernameMember = this.navParams.get("username");
        console.log("user: " + this.usernameMember);
    }
    ModificaRisorsaPage.prototype.modifica = function () {
        this.chiamataPost();
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */]);
    };
    ModificaRisorsaPage.prototype.chiamataPost = function () {
        var alert = this.alertControl.create({
            title: 'Costo Team Member Aggiornato!',
            subTitle: 'Il nuovo costo per ' + this.nomeMember.toUpperCase() + ' è: ' + this.nuovoCosto + '.',
            buttons: ['Ok']
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            costo: this.nuovoCosto,
            user: this.usernameMember
        };
        this.http.post("http://localhost:8888/WASP/apiAggiornaCostoMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert.present();
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ModificaRisorsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-risorsa',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/'<!--\n  Generated template for the ModificaRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Aggiorna Costo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Costo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoCosto" name="costo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Aggiorna Costo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ModificaRisorsaPage);
    return ModificaRisorsaPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=modifica-risorsa.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aggiungimember/aggiungimember.module": [
		473,
		19
	],
	"../pages/assegna-task-persona/assegna-task-persona.module": [
		474,
		18
	],
	"../pages/assegna-task/assegna-task.module": [
		475,
		17
	],
	"../pages/convalida-ore-lista/convalida-ore-lista.module": [
		476,
		16
	],
	"../pages/crea-progetto/crea-progetto.module": [
		477,
		15
	],
	"../pages/crea-task/crea-task.module": [
		478,
		14
	],
	"../pages/dettaglio-task/dettaglio-task.module": [
		479,
		13
	],
	"../pages/home-progetto/home-progetto.module": [
		480,
		12
	],
	"../pages/home-tm/home-tm.module": [
		481,
		11
	],
	"../pages/invio-ore-sel-task/invio-ore-sel-task.module": [
		482,
		10
	],
	"../pages/invio-ore/invio-ore.module": [
		483,
		9
	],
	"../pages/login/login.module": [
		484,
		8
	],
	"../pages/modifica-budget/modifica-budget.module": [
		485,
		7
	],
	"../pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.module": [
		486,
		6
	],
	"../pages/modifica-risorsa/modifica-risorsa.module": [
		487,
		5
	],
	"../pages/profilo-member/profilo-member.module": [
		488,
		4
	],
	"../pages/selezionaprogetto/selezionaprogetto.module": [
		489,
		3
	],
	"../pages/signup/signup.module": [
		490,
		2
	],
	"../pages/visualizza-members/visualizza-members.module": [
		491,
		1
	],
	"../pages/welcome/welcome.module": [
		492,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelezionaprogettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the SelezionaprogettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Generated class for the SelezionaprogettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelezionaprogettoPage = (function () {
    function SelezionaprogettoPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.http.get("http://localhost:8888/WASP/apiListaProgetti.php").map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.progetti = data;
            console.log(data);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    }
    SelezionaprogettoPage.prototype.apriProgetto = function (codice, nome) {
        console.log("Apro progetto: " + codice + " con nome: " + nome);
        this.storage.set("progetto", nome); //<-- TODO qui va inserito il codice
        this.storage.set("codProgetto", codice); //<-- TODO qui va inserito il codice
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__["a" /* HomeProgettoPage */], { "nome": nome, "codice": codice });
    };
    SelezionaprogettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selezionaprogetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/'<!--\n  Generated template for the SelezionaprogettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seleziona Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 text-center>Seleziona un progetto</h3>\n\n  <ion-list class="lista-progetti">\n    <ion-item (click)="apriProgetto(progetto.codice, progetto.nome)"  *ngFor="let progetto of progetti">\n      <button class="bottoni-progetto">{{progetto.nome}}</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], SelezionaprogettoPage);
    return SelezionaprogettoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=selezionaprogetto.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
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
 * Generated class for the HomeProgettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeProgettoPage = (function () {
    function HomeProgettoPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.arr = [];
        this.storage.get('username').then(function (name) {
            _this.userPm = name;
        });
        this.storage.get('progetto').then(function (progetto) {
            _this.nomeProgetto = progetto;
        });
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
            _this.chiamataPost();
        });
        this.nomeProgetto = navParams.get("nome");
        this.codiceProgetto = navParams.get("codice");
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    HomeProgettoPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto
        };
        this.http.post("http://localhost:8888/WASP/apiSpeseERicaviGiornalieri.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.progetto = data;
            _this.arr.push(parseInt(_this.progetto.costo));
            _this.arr.push(parseInt(_this.progetto.ricavo));
            _this.doughnutChart.update();
            console.log("Giorni: " + _this.progetto.giorni);
            //console.log(this.doughnutChart.data);
            //console.log(this.progetto);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    HomeProgettoPage.prototype.ionViewDidEnter = function () {
        /*
    
        this.barChart = new Chart(this.barCanvas.nativeElement, {
    
          type: 'bar',
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
    
        });
        */
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Spese", "Ricavi"],
                datasets: [{
                        label: 'Spese/Ricavi',
                        data: this.arr,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                datasets: [
                    {
                        label: "Spese",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,0,0,0.4)",
                        borderColor: "rgba(255,0,0,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,0,0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,0,0,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [1500, 1700, 1800, 1300, 2000, 1230, 1500, 1550, 1600, 1340, 1500, 2300],
                        spanGaps: false,
                    },
                    {
                        label: "Ricavi",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [1700, 1800, 1850, 1500, 1700, 1300, 1600, 1600, 1500, 1400, 1700, 1800],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    HomeProgettoPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null && _this.nomeProgetto == null) {
                console.log("NON HAI SCELTO");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
            else {
                _this.nomeProgetto = progetto;
                console.log("Progetto aperto: " + progetto);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomeProgettoPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], HomeProgettoPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomeProgettoPage.prototype, "lineCanvas", void 0);
    HomeProgettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-progetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-progetto/home-progetto.html"*/'<!--\n  Generated template for the HomeProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Dashboard - {{nomeProgetto}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<!--\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n-->\n\n    <p text-center>\n        Codice Progetto: <span class="colora">{{codiceProgetto}}</span>\n    </p>\n\n  <ion-card>\n    <ion-card-header>\n      Spese/ricavi\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas height="225px"></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Spese e ricavi mensili\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas height="225px"></canvas>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-progetto/home-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], HomeProgettoPage);
    return HomeProgettoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home-progetto.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_progetto_home_progetto__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_crea_progetto_crea_progetto__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aggiungimember_aggiungimember__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_crea_task_crea_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assegna_task_assegna_task__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assegna_task_persona_assegna_task_persona__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modifica_budget_modifica_budget__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modifica_risorsa_modifica_risorsa__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_visualizza_members_visualizza_members__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profilo_member_profilo_member__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_invio_ore_sel_task_invio_ore_sel_task__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_invio_ore_invio_ore__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dettaglio_task_dettaglio_task__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_convalida_ore_lista_convalida_ore_lista__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_progetto_home_progetto__["a" /* HomeProgettoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_crea_progetto_crea_progetto__["a" /* CreaProgettoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aggiungimember_aggiungimember__["a" /* AggiungimemberPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_crea_task_crea_task__["a" /* CreaTaskPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assegna_task_assegna_task__["a" /* AssegnaTaskPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_assegna_task_persona_assegna_task_persona__["a" /* AssegnaTaskPersonaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modifica_budget_modifica_budget__["a" /* ModificaBudgetPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modifica_risorsa_modifica_risorsa__["a" /* ModificaRisorsaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profilo_member_profilo_member__["a" /* ProfiloMemberPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_invio_ore_sel_task_invio_ore_sel_task__["a" /* InvioOreSelTaskPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_invio_ore_invio_ore__["a" /* InvioOrePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__["a" /* HomeTmPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_dettaglio_task_dettaglio_task__["a" /* DettaglioTaskPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_convalida_ore_lista_convalida_ore_lista__["a" /* ConvalidaOreListaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_29__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aggiungimember/aggiungimember.module#AggiungimemberPageModule', name: 'AggiungimemberPage', segment: 'aggiungimember', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task-persona/assegna-task-persona.module#AssegnaTaskPersonaPageModule', name: 'AssegnaTaskPersonaPage', segment: 'assegna-task-persona', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task/assegna-task.module#AssegnaTaskPageModule', name: 'AssegnaTaskPage', segment: 'assegna-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/convalida-ore-lista/convalida-ore-lista.module#ConvalidaOreListaPageModule', name: 'ConvalidaOreListaPage', segment: 'convalida-ore-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-progetto/crea-progetto.module#CreaProgettoPageModule', name: 'CreaProgettoPage', segment: 'crea-progetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-task/crea-task.module#CreaTaskPageModule', name: 'CreaTaskPage', segment: 'crea-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettaglio-task/dettaglio-task.module#DettaglioTaskPageModule', name: 'DettaglioTaskPage', segment: 'dettaglio-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-progetto/home-progetto.module#HomeProgettoPageModule', name: 'HomeProgettoPage', segment: 'home-progetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tm/home-tm.module#HomeTmPageModule', name: 'HomeTmPage', segment: 'home-tm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invio-ore-sel-task/invio-ore-sel-task.module#InvioOreSelTaskPageModule', name: 'InvioOreSelTaskPage', segment: 'invio-ore-sel-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invio-ore/invio-ore.module#InvioOrePageModule', name: 'InvioOrePage', segment: 'invio-ore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-budget/modifica-budget.module#ModificaBudgetPageModule', name: 'ModificaBudgetPage', segment: 'modifica-budget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.module#ModificaRicavoRisorsaPageModule', name: 'ModificaRicavoRisorsaPage', segment: 'modifica-ricavo-risorsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-risorsa/modifica-risorsa.module#ModificaRisorsaPageModule', name: 'ModificaRisorsaPage', segment: 'modifica-risorsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo-member/profilo-member.module#ProfiloMemberPageModule', name: 'ProfiloMemberPage', segment: 'profilo-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selezionaprogetto/selezionaprogetto.module#SelezionaprogettoPageModule', name: 'SelezionaprogettoPage', segment: 'selezionaprogetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizza-members/visualizza-members.module#VisualizzaMembersPageModule', name: 'VisualizzaMembersPage', segment: 'visualizza-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_progetto_home_progetto__["a" /* HomeProgettoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_crea_progetto_crea_progetto__["a" /* CreaProgettoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aggiungimember_aggiungimember__["a" /* AggiungimemberPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_crea_task_crea_task__["a" /* CreaTaskPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assegna_task_assegna_task__["a" /* AssegnaTaskPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_assegna_task_persona_assegna_task_persona__["a" /* AssegnaTaskPersonaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modifica_budget_modifica_budget__["a" /* ModificaBudgetPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modifica_risorsa_modifica_risorsa__["a" /* ModificaRisorsaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profilo_member_profilo_member__["a" /* ProfiloMemberPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_invio_ore_sel_task_invio_ore_sel_task__["a" /* InvioOreSelTaskPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_invio_ore_invio_ore__["a" /* InvioOrePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__["a" /* HomeTmPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_dettaglio_task_dettaglio_task__["a" /* DettaglioTaskPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_convalida_ore_lista_convalida_ore_lista__["a" /* ConvalidaOreListaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettaglio_task_dettaglio_task__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
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
    function HomeTmPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        setTimeout(this.checkLogin(), 1000);
        this.notifiche = [
            { "titolo": "Task", "descrizione": "Ti è stato assegnato un nuovo task", "data": "03/01/2018" },
            { "titolo": "Comunicazione Ore", "descrizione": "Le ore comunicate per il Task 1 sono state accettate", "data": "02/01/2018" },
            { "titolo": "Comunicazione Ore", "descrizione": "Le ore comunicate per il Task 2 sono state rifiutate", "data": "01/01/2018" },
        ];
    }
    HomeTmPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            username: this.username
        };
        this.http.post("http://localhost:8888/WASP/apiTasksInCorsoTeamMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    HomeTmPage.prototype.dettaglioTask = function (nomeProgetto, attivita, dataInizio, oreComunicate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dettaglio_task_dettaglio_task__["a" /* DettaglioTaskPage */], { "nomeProgetto": nomeProgetto, "attivita": attivita, "dataInizio": dataInizio, "oreComunicate": oreComunicate });
    };
    HomeTmPage.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get('username').then(function (name) {
            if (name == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
            }
            else {
                _this.username = name;
                _this.chiamataPost();
                console.log(_this.username);
            }
        });
    };
    HomeTmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tm',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-tm/home-tm.html"*/'<!--\n  Generated template for the HomeTmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home TM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username | uppercase}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <button (click)="dettaglioTask(task.nome, task.attivita, task.dataInizio, task.oreComunicate)" ion-item *ngFor="let task of tasks">\n      <!--<h2><strong>Progetto {{task.nome}}</strong></h2>-->\n      <h2><strong>{{task.attivita}}</strong></h2>\n      <h4>{{task.dataInizio | date:"medium"}}</h4>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-tm/home-tm.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], HomeTmPage);
    return HomeTmPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home-tm.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 188,
	"./af.js": 188,
	"./ar": 189,
	"./ar-dz": 190,
	"./ar-dz.js": 190,
	"./ar-kw": 191,
	"./ar-kw.js": 191,
	"./ar-ly": 192,
	"./ar-ly.js": 192,
	"./ar-ma": 193,
	"./ar-ma.js": 193,
	"./ar-sa": 194,
	"./ar-sa.js": 194,
	"./ar-tn": 195,
	"./ar-tn.js": 195,
	"./ar.js": 189,
	"./az": 196,
	"./az.js": 196,
	"./be": 197,
	"./be.js": 197,
	"./bg": 198,
	"./bg.js": 198,
	"./bn": 199,
	"./bn.js": 199,
	"./bo": 200,
	"./bo.js": 200,
	"./br": 201,
	"./br.js": 201,
	"./bs": 202,
	"./bs.js": 202,
	"./ca": 203,
	"./ca.js": 203,
	"./cs": 204,
	"./cs.js": 204,
	"./cv": 205,
	"./cv.js": 205,
	"./cy": 206,
	"./cy.js": 206,
	"./da": 207,
	"./da.js": 207,
	"./de": 208,
	"./de-at": 209,
	"./de-at.js": 209,
	"./de-ch": 210,
	"./de-ch.js": 210,
	"./de.js": 208,
	"./dv": 211,
	"./dv.js": 211,
	"./el": 212,
	"./el.js": 212,
	"./en-au": 213,
	"./en-au.js": 213,
	"./en-ca": 214,
	"./en-ca.js": 214,
	"./en-gb": 215,
	"./en-gb.js": 215,
	"./en-ie": 216,
	"./en-ie.js": 216,
	"./en-nz": 217,
	"./en-nz.js": 217,
	"./eo": 218,
	"./eo.js": 218,
	"./es": 219,
	"./es-do": 220,
	"./es-do.js": 220,
	"./es.js": 219,
	"./et": 221,
	"./et.js": 221,
	"./eu": 222,
	"./eu.js": 222,
	"./fa": 223,
	"./fa.js": 223,
	"./fi": 224,
	"./fi.js": 224,
	"./fo": 225,
	"./fo.js": 225,
	"./fr": 226,
	"./fr-ca": 227,
	"./fr-ca.js": 227,
	"./fr-ch": 228,
	"./fr-ch.js": 228,
	"./fr.js": 226,
	"./fy": 229,
	"./fy.js": 229,
	"./gd": 230,
	"./gd.js": 230,
	"./gl": 231,
	"./gl.js": 231,
	"./gom-latn": 232,
	"./gom-latn.js": 232,
	"./he": 233,
	"./he.js": 233,
	"./hi": 234,
	"./hi.js": 234,
	"./hr": 235,
	"./hr.js": 235,
	"./hu": 236,
	"./hu.js": 236,
	"./hy-am": 237,
	"./hy-am.js": 237,
	"./id": 238,
	"./id.js": 238,
	"./is": 239,
	"./is.js": 239,
	"./it": 240,
	"./it.js": 240,
	"./ja": 241,
	"./ja.js": 241,
	"./jv": 242,
	"./jv.js": 242,
	"./ka": 243,
	"./ka.js": 243,
	"./kk": 244,
	"./kk.js": 244,
	"./km": 245,
	"./km.js": 245,
	"./kn": 246,
	"./kn.js": 246,
	"./ko": 247,
	"./ko.js": 247,
	"./ky": 248,
	"./ky.js": 248,
	"./lb": 249,
	"./lb.js": 249,
	"./lo": 250,
	"./lo.js": 250,
	"./lt": 251,
	"./lt.js": 251,
	"./lv": 252,
	"./lv.js": 252,
	"./me": 253,
	"./me.js": 253,
	"./mi": 254,
	"./mi.js": 254,
	"./mk": 255,
	"./mk.js": 255,
	"./ml": 256,
	"./ml.js": 256,
	"./mr": 257,
	"./mr.js": 257,
	"./ms": 258,
	"./ms-my": 259,
	"./ms-my.js": 259,
	"./ms.js": 258,
	"./my": 260,
	"./my.js": 260,
	"./nb": 261,
	"./nb.js": 261,
	"./ne": 262,
	"./ne.js": 262,
	"./nl": 263,
	"./nl-be": 264,
	"./nl-be.js": 264,
	"./nl.js": 263,
	"./nn": 265,
	"./nn.js": 265,
	"./pa-in": 266,
	"./pa-in.js": 266,
	"./pl": 267,
	"./pl.js": 267,
	"./pt": 268,
	"./pt-br": 269,
	"./pt-br.js": 269,
	"./pt.js": 268,
	"./ro": 270,
	"./ro.js": 270,
	"./ru": 271,
	"./ru.js": 271,
	"./sd": 272,
	"./sd.js": 272,
	"./se": 273,
	"./se.js": 273,
	"./si": 274,
	"./si.js": 274,
	"./sk": 275,
	"./sk.js": 275,
	"./sl": 276,
	"./sl.js": 276,
	"./sq": 277,
	"./sq.js": 277,
	"./sr": 278,
	"./sr-cyrl": 279,
	"./sr-cyrl.js": 279,
	"./sr.js": 278,
	"./ss": 280,
	"./ss.js": 280,
	"./sv": 281,
	"./sv.js": 281,
	"./sw": 282,
	"./sw.js": 282,
	"./ta": 283,
	"./ta.js": 283,
	"./te": 284,
	"./te.js": 284,
	"./tet": 285,
	"./tet.js": 285,
	"./th": 286,
	"./th.js": 286,
	"./tl-ph": 287,
	"./tl-ph.js": 287,
	"./tlh": 288,
	"./tlh.js": 288,
	"./tr": 289,
	"./tr.js": 289,
	"./tzl": 290,
	"./tzl.js": 290,
	"./tzm": 291,
	"./tzm-latn": 292,
	"./tzm-latn.js": 292,
	"./tzm.js": 291,
	"./uk": 293,
	"./uk.js": 293,
	"./ur": 294,
	"./ur.js": 294,
	"./uz": 295,
	"./uz-latn": 296,
	"./uz-latn.js": 296,
	"./uz.js": 295,
	"./vi": 297,
	"./vi.js": 297,
	"./x-pseudo": 298,
	"./x-pseudo.js": 298,
	"./yo": 299,
	"./yo.js": 299,
	"./zh-cn": 300,
	"./zh-cn.js": 300,
	"./zh-hk": 301,
	"./zh-hk.js": 301,
	"./zh-tw": 302,
	"./zh-tw.js": 302
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 428;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_progetto_home_progetto__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_crea_progetto_crea_progetto__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_aggiungimember_aggiungimember__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_crea_task_crea_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_assegna_task_assegna_task__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visualizza_members_visualizza_members__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invio_ore_sel_task_invio_ore_sel_task__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_tm_home_tm__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_convalida_ore_lista_convalida_ore_lista__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, menu, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.menu = menu;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.pagesProgetto = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_progetto_home_progetto__["a" /* HomeProgettoPage */], icon: 'ios-home-outline' },
            { title: 'Aggiungi Team Member', component: __WEBPACK_IMPORTED_MODULE_9__pages_aggiungimember_aggiungimember__["a" /* AggiungimemberPage */], icon: 'ios-person-add-outline' },
            { title: 'Crea Task', component: __WEBPACK_IMPORTED_MODULE_10__pages_crea_task_crea_task__["a" /* CreaTaskPage */], icon: 'ios-add-outline' },
            { title: 'Assegna Task', component: __WEBPACK_IMPORTED_MODULE_11__pages_assegna_task_assegna_task__["a" /* AssegnaTaskPage */], icon: 'ios-person-add-outline' },
            { title: 'Visualizza Members', component: __WEBPACK_IMPORTED_MODULE_13__pages_visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */], icon: 'ios-people-outline' },
            { title: 'Aggiorna Budget', component: __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__["a" /* ModificaBudgetPage */], icon: 'ios-cash-outline' },
            { title: 'Convalida Ore', component: __WEBPACK_IMPORTED_MODULE_17__pages_convalida_ore_lista_convalida_ore_lista__["a" /* ConvalidaOreListaPage */], icon: 'ios-clock-outline' },
        ];
        this.pagesProgettoTM = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_15__pages_home_tm_home_tm__["a" /* HomeTmPage */], icon: 'ios-home-outline' },
            { title: 'Comunica ore', component: __WEBPACK_IMPORTED_MODULE_14__pages_invio_ore_sel_task_invio_ore_sel_task__["a" /* InvioOreSelTaskPage */], icon: 'ios-time-outline' },
        ];
        this.pagesGenerale = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */], icon: 'ios-home-outline' },
            { title: 'Crea Progetto', component: __WEBPACK_IMPORTED_MODULE_8__pages_crea_progetto_crea_progetto__["a" /* CreaProgettoPage */], icon: 'ios-add-outline' },
            { title: 'Seleziona Progetto', component: __WEBPACK_IMPORTED_MODULE_6__pages_selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */], icon: 'ios-list-box-outline' },
        ];
        this.pagesImpostazioni = [
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'log-out', logsOut: true }
        ];
        this.storage.get("posizione").then(function (result) {
            if (result == "PM") {
                _this.enableMenu(true);
            }
            else {
                _this.enableMenu(false);
            }
        });
        this.initializeApp();
        this.listenToLoginEvents();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.logout();
        }
    };
    MyApp.prototype.logout = function () {
        this.storage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    /**
     * IF TRUE --> LOGGED AS PM
     * @param loggedPM
     */
    MyApp.prototype.enableMenu = function (loggedPM) {
        this.menu.enable(loggedPM, 'loggedPM');
        this.menu.enable(!loggedPM, 'loggedTM');
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:pm', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:tm', function () {
            _this.enableMenu(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/app/app.html"*/'<!-- MENU PM -->\n<ion-menu id="loggedPM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgetto" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Generale\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesGenerale" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n\n\n</ion-menu>\n\n<!-- MENU TM -->\n<ion-menu id="loggedTM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgettoTM" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        setTimeout(this.checkLogin(), 1000);
        this.notifiche = [
            { "titolo": "Comunicazione Ore", "descrizione": "Umberto Picariello ha comunicato le ore per il task 1", "data": "03/01/2018" },
            { "titolo": "Comunicazione Ore", "descrizione": "Fabiano Pecorelli ha comunicato le ore per il task 2", "data": "02/01/2018" },
        ];
    }
    HomePage.prototype.checkLogin = function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username | uppercase}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_tm_home_tm__ = __webpack_require__(40);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WelcomePage');
        this.storage.get("posizione").then(function (result) {
            if (result == "PM") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
            else if (result == "TM") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_tm_home_tm__["a" /* HomeTmPage */]);
            }
        });
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/welcome/welcome.html"*/'<!--\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>WASP</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding id="welcome" class="background">\n  <img src="assets/imgs/logo.png" class="logo"/>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1 text-center>WASP</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button full color="success" (click)="signup()">Registrati</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button full color="lightText" (click)="login()">Accedi</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_member_profilo_member__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the VisualizzaMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualizzaMembersPage = (function () {
    function VisualizzaMembersPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        setTimeout(this.checkProgettoSelezionato(), 1000);
        this.storage.get('codProgetto').then(function (cod) {
            _this.codiceProgetto = cod;
            _this.chiamataPost();
        });
    }
    VisualizzaMembersPage.prototype.chiamataPost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            codice: this.codiceProgetto,
        };
        this.http.post("http://localhost:8888/WASP/apiVisualizzaMember.php", postParams, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.utenti = data;
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    VisualizzaMembersPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null) {
                console.log("Seleziona il progetto prima di procedere");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
        });
    };
    VisualizzaMembersPage.prototype.selezionaPersona = function (cognome, nome, posizione, costo, ricavo, username) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profilo_member_profilo_member__["a" /* ProfiloMemberPage */], { "cognome": cognome, "nome": nome, "ruolo": posizione, "costo": costo, "ricavo": ricavo, "user": username });
        console.log("Selezionato: " + nome);
    };
    VisualizzaMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualizza-members',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/visualizza-members/visualizza-members.html"*/'<!--\n  Generated template for the VisualizzaMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p text-center>\n    Seleziona un membro per visualizzarne le informazioni.\n  </p>\n<br>\n  <ion-list>\n    <button ion-item (click)="selezionaPersona(utente.cognome, utente.nome, utente.posizione, utente.costo, utente.ricavo, utente.user)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome | uppercase}} {{utente.cognome | uppercase}} </strong></h2>\n      <h3 *ngIf="utente.posizione"> <strong>Team Member</strong></h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costo }}€</strong></h4>\n      <h4> Ricavo giornaliero: <strong>{{ utente.ricavo }}€</strong></h4>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/visualizza-members/visualizza-members.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], VisualizzaMembersPage);
    return VisualizzaMembersPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=visualizza-members.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map