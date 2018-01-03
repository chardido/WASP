webpackJsonp([18],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungimemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
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
    function AggiungimemberPage(navCtrl, navParams, storage, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.utenti = [
            { "nome": "Carlo Di Domenico", "username": "chardido" },
            { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli" },
            { "nome": "Umberto Picariello", "username": "umbertopic" }
        ];
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
        var alert = this.alertControl.create({
            title: 'Utente aggiunto',
            subTitle: username + ' è stato aggiunto al team.',
            buttons: ['Continua']
        });
        alert.present();
        console.log("Aggiungo: " + username + " al progetto: " + this.progetto.nome);
    };
    AggiungimemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aggiungimember',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/aggiungimember/aggiungimember.html"*/'<!--\n  Generated template for the AggiungimemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aggiungi Team Member</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar placeholder="Cerca Utente Per Username" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <div padding>\n    <p text-center>\n      Aggiungi un Team Member al tuo progetto!\n    </p>\n\n    <ion-list>\n      <button ion-item (click)="aggiungiUtente(utente.username)" *ngFor="let utente of utenti">\n        <h2> <strong>{{ utente.username }} </strong></h2>\n        <h3> {{ utente.nome }} </h3>\n      </button>\n    </ion-list>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/aggiungimember/aggiungimember.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AggiungimemberPage);
    return AggiungimemberPage;
}());

//# sourceMappingURL=aggiungimember.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPersonaPage; });
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
 * Generated class for the AssegnaTaskPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssegnaTaskPersonaPage = (function () {
    function AssegnaTaskPersonaPage(navCtrl, navParams, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertControl = alertControl;
        this.utenti = [
            { "nome": "Carlo Di Domenico", "username": "chardido", "costoG": 400 },
            { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli", "costoG": 300 },
            { "nome": "Umberto Picariello", "username": "umbertopic", "costoG": 300 }
        ];
    }
    AssegnaTaskPersonaPage.prototype.assegnaTask = function (username) {
        var nomeTask = this.navParams.get("task");
        var alert = this.alertControl.create({
            title: 'Task Assegnato',
            subTitle: 'Il task ' + nomeTask + ' stato assegnato a ' + username + '.',
            buttons: ['Continua']
        });
        alert.present();
        console.log("Task: " + nomeTask + " assegnato a: " + username);
    };
    AssegnaTaskPersonaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assegna-task-persona',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/'<!--\n  Generated template for the AssegnaTaskPersonaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il team member a cui assegnare il task selezionato\n  </p>\n  <br>\n\n  <ion-list>\n    <button ion-item (click)="assegnaTask(utente.username)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome }} </strong></h2>\n      <h3> {{ utente.username }} </h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costoG }}€</strong></h4>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AssegnaTaskPersonaPage);
    return AssegnaTaskPersonaPage;
}());

//# sourceMappingURL=assegna-task-persona.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assegna_task_persona_assegna_task_persona__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
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
    function AssegnaTaskPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        setTimeout(this.checkProgettoSelezionato(), 1000);
        /*
         I tasks verranno presi tramite chiamata GET
         */
        this.tasks = [
            { "nome": "Task1", "descrizione": "Questo è il task numero 1" },
            { "nome": "Task2", "descrizione": "Questo è il task numero 2" },
            { "nome": "Task3", "descrizione": "Questo è il task numero 3" }
        ];
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
    //todo - al posto del task gli sarà passato l'id
    AssegnaTaskPage.prototype.assegnaTask = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assegna_task_persona_assegna_task_persona__["a" /* AssegnaTaskPersonaPage */], { "task": task });
        console.log("Task selezionato: " + task);
    };
    AssegnaTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assegna-task',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/assegna-task/assegna-task.html"*/'<!--\n  Generated template for the AssegnaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<p text-center>\n  Seleziona il task da assegnare tra quelli disponibili\n</p>\n  <br>\n  <ion-list>\n    <button ion-item (click)="assegnaTask(task.nome)" *ngFor="let task of tasks">\n      <h2> <strong>{{ task.nome}} </strong></h2>\n      <h3> {{ task.descrizione }} </h3>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/assegna-task/assegna-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AssegnaTaskPage);
    return AssegnaTaskPage;
}());

//# sourceMappingURL=assegna-task.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
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
        this.http.post("http://localhost:80/WASP/apiCreaProgetto.php", postParams, options)
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
            selector: 'page-crea-progetto',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/crea-progetto/crea-progetto.html"*/'<!--\n  Generated template for the CreaProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nome del progetto <br>\n    Successivamente recati alla <a href="www.google.it">pagina</a> e importa il progetto in formato XML.\n  </p>\n  <form (ngSubmit)="creaProgetto()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Nome progetto</ion-label>\n      <ion-input type="text" [(ngModel)]="nomeProgetto" name="nome"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea progetto</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/crea-progetto/crea-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], CreaProgettoPage);
    return CreaProgettoPage;
}());

//# sourceMappingURL=crea-progetto.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
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
    function CreaTaskPage(navCtrl, navParams, storage, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        this.task = { nome: '', descrizione: '' };
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
        if (this.task.nome != "" && this.task.descrizione != "") {
            var alert_1 = this.alertControl.create({
                title: 'Task Creato',
                subTitle: 'Il task è stato creato correttamente.',
                buttons: ['Continua']
            });
            alert_1.present();
            console.log("Nuovo task: " + this.task.nome + "; Descrizione: " + this.task.descrizione);
        }
    };
    CreaTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crea-task',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/crea-task/crea-task.html"*/'<!--\n  Generated template for the CreaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p text-center>\n  Completa i dati e inserisci un nuovo task\n</p>\n\n  <form (ngSubmit)="creaTask()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="task.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descrizione</ion-label>\n      <ion-textarea [(ngModel)]="task.descrizione" name="descrizione" placeholder="Inserisci una descrizione"></ion-textarea>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea Task</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/crea-task/crea-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreaTaskPage);
    return CreaTaskPage;
}());

//# sourceMappingURL=crea-task.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__ = __webpack_require__(39);
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
            this.http.post("http://localhost:80/WASP/apiLogin.php", postParams, options)
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Accedi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="login.username" name="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="login.password" name="title"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Accedi</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_tm_home_tm__ = __webpack_require__(39);
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
            this.http.post("http://localhost:80/WASP/apiRegistraUtente.php", postParams, options)
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
            /*
             this.storage.set('username',this.signup.username);
             this.storage.set('tipo',this.signup.tipo);
             this.navCtrl.setRoot(HomePage);
             console.log(this.signup);
             */
        }
        else {
            console.log("Controlla di aver completato tutti i campi");
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrati</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cognome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.cognome" name="cognome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signup.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="signup.tipo" name="select">\n        <ion-option value="0">Project Manager</ion-option>\n        <ion-option value="1">Team Member</ion-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Registrati</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvioOreSelTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invio_ore_invio_ore__ = __webpack_require__(122);
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
    function InvioOreSelTaskPage(navCtrl, navParams) {
        /*
         I tasks verranno presi tramite chiamata GET
         */
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tasks = [
            { "nome": "Task1", "descrizione": "Questo è il task numero 1" },
            { "nome": "Task2", "descrizione": "Questo è il task numero 2" },
            { "nome": "Task3", "descrizione": "Questo è il task numero 3" }
        ];
    }
    InvioOreSelTaskPage.prototype.inviaOre = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invio_ore_invio_ore__["a" /* InvioOrePage */], { "task": task });
        console.log("Selezionato: " + task);
    };
    InvioOreSelTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invio-ore-sel-task',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/invio-ore-sel-task/invio-ore-sel-task.html"*/'<!--\n  Generated template for the InvioOreSelTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Comunica ore</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il task per la quale desideri comunicare le ore\n  </p>\n  <br>\n  <ion-list>\n    <button ion-item (click)="inviaOre(task.nome)" *ngFor="let task of tasks">\n      <h2> <strong>{{ task.nome}} </strong></h2>\n      <h3> {{ task.descrizione }} </h3>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/invio-ore-sel-task/invio-ore-sel-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InvioOreSelTaskPage);
    return InvioOreSelTaskPage;
}());

//# sourceMappingURL=invio-ore-sel-task.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvioOrePage; });
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
            selector: 'page-invio-ore',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/invio-ore/invio-ore.html"*/'<!--\n  Generated template for the InvioOrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comunica ore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci le ore da comunicare al Project Manager\n  </p>\n  <form (ngSubmit)="comunicaOre()">\n    <ion-item>\n      <ion-label>Ore</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="oreInserite" name="ore"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Comunica ore</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/invio-ore/invio-ore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InvioOrePage);
    return InvioOrePage;
}());

//# sourceMappingURL=invio-ore.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaBudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
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
    function ModificaBudgetPage(navCtrl, navParams, storage, alertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertControl = alertControl;
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    ModificaBudgetPage.prototype.modificaBudget = function () {
        if (this.nuovoBudget != null) {
            var alert_1 = this.alertControl.create({
                title: 'Budget Modificato',
                subTitle: ' Il budget è stato modificato con successo.',
                buttons: ['Continua']
            });
            alert_1.present();
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
            selector: 'page-modifica-budget',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-budget/modifica-budget.html"*/'<!--\n  Generated template for the ModificaBudgetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modifica Budget</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nuovo budget per il progetto: <strong>{{nomeProgetto}}</strong>\n  </p>\n\n  <form (ngSubmit)="modificaBudget()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Budget</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoBudget" name="budget"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Budget</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-budget/modifica-budget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModificaBudgetPage);
    return ModificaBudgetPage;
}());

//# sourceMappingURL=modifica-budget.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRicavoRisorsaPage; });
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
 * Generated class for the ModificaRicavoRisorsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaRicavoRisorsaPage = (function () {
    function ModificaRicavoRisorsaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nomeMember = this.navParams.get("nome");
    }
    ModificaRicavoRisorsaPage.prototype.modifica = function () {
        this.navCtrl.pop();
    };
    ModificaRicavoRisorsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-ricavo-risorsa',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/'<!--\n  Generated template for the ModificaRicavoRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Modifica Ricavo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Ricavo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoRicavo" name="ricavo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Ricavo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModificaRicavoRisorsaPage);
    return ModificaRicavoRisorsaPage;
}());

//# sourceMappingURL=modifica-ricavo-risorsa.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRisorsaPage; });
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
 * Generated class for the ModificaRisorsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaRisorsaPage = (function () {
    function ModificaRisorsaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nomeMember = this.navParams.get("nome");
    }
    ModificaRisorsaPage.prototype.modifica = function () {
        this.navCtrl.pop();
    };
    ModificaRisorsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-risorsa',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/'<!--\n  Generated template for the ModificaRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Modifica Costo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Costo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoCosto" name="costo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Costo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModificaRisorsaPage);
    return ModificaRisorsaPage;
}());

//# sourceMappingURL=modifica-risorsa.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifica_risorsa_modifica_risorsa__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(124);
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
    function ProfiloMemberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nomeMembro = this.navParams.get("nome");
        this.costoMembro = this.navParams.get("costo");
        this.ruoloMembro = this.navParams.get("ruolo");
        this.ricavoMembro = this.navParams.get("ricavo");
        this.tasks = [
            { "nome": "Task 1", "descrizione": "Questa è la descrizione del task 1" },
            { "nome": "Task 2", "descrizione": "Questa è la descrizione del task 2" },
            { "nome": "Task 3", "descrizione": "Questa è la descrizione del task 3" }
        ];
    }
    ProfiloMemberPage.prototype.modificaCosto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modifica_risorsa_modifica_risorsa__["a" /* ModificaRisorsaPage */], { "nome": this.nomeMembro });
    };
    ProfiloMemberPage.prototype.modificaRicavo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */], { "nome": this.nomeMembro });
    };
    ProfiloMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo-member',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/profilo-member/profilo-member.html"*/'<!--\n  Generated template for the ProfiloMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <h2>Informazioni</h2>\n    <ion-item>\n      <h4> Nome <span float-right><strong>{{ nomeMembro }} </strong></span></h4>\n    </ion-item>\n    <button ion-item (click)="modificaCosto()">\n      <h4>Costo <span float-right><strong>{{ costoMembro }}€/gg</strong></span></h4>\n    </button>\n    <button ion-item (click)="modificaRicavo()">\n      <h4>Ricavo <span float-right><strong>{{ ricavoMembro }}€/gg</strong></span></h4>\n    </button>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <ion-item *ngFor="let task of tasks">\n      <h2>{{task.nome}}</h2>\n      <h4>{{task.descrizione}}</h4>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/profilo-member/profilo-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfiloMemberPage);
    return ProfiloMemberPage;
}());

//# sourceMappingURL=profilo-member.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_member_profilo_member__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
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
    function VisualizzaMembersPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        setTimeout(this.checkProgettoSelezionato(), 1000);
        this.utenti = [
            { "nome": "Carlo Di Domenico", "username": "chardido", "ruolo": "Team Manager", "costoG": 1200, "ricavoG": 1400 },
            { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli", "ruolo": "Team Member", "costoG": 300, "ricavoG": 350 },
            { "nome": "Umberto Picariello", "username": "umbertopic", "ruolo": "Team Member", "costoG": 300, "ricavoG": 400 }
        ];
    }
    VisualizzaMembersPage.prototype.checkProgettoSelezionato = function () {
        var _this = this;
        this.storage.get('progetto').then(function (progetto) {
            if (progetto == null) {
                console.log("Seleziona il progetto prima di procedere");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */]);
            }
        });
    };
    VisualizzaMembersPage.prototype.selezionaPersona = function (nome, ruolo, costo, ricavo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profilo_member_profilo_member__["a" /* ProfiloMemberPage */], { "nome": nome, "ruolo": ruolo, "costo": costo, "ricavo": ricavo });
        console.log("Selezionato: " + nome);
    };
    VisualizzaMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualizza-members',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/visualizza-members/visualizza-members.html"*/'<!--\n  Generated template for the VisualizzaMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p text-center>\n    Seleziona un membro per visualizzarne le informazioni\n  </p>\n<br>\n  <ion-list>\n    <button ion-item (click)="selezionaPersona(utente.nome, utente.ruolo, utente.costoG, utente.ricavoG)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome }} </strong></h2>\n      <h3> <strong>{{ utente.ruolo }} </strong></h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costoG }}€</strong></h4>\n      <h4> Ricavo giornaliero: <strong>{{ utente.ricavoG }}€</strong></h4>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/visualizza-members/visualizza-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], VisualizzaMembersPage);
    return VisualizzaMembersPage;
}());

//# sourceMappingURL=visualizza-members.js.map

/***/ }),

/***/ 137:
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
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aggiungimember/aggiungimember.module": [
		470,
		17
	],
	"../pages/assegna-task-persona/assegna-task-persona.module": [
		471,
		16
	],
	"../pages/assegna-task/assegna-task.module": [
		472,
		15
	],
	"../pages/crea-progetto/crea-progetto.module": [
		473,
		14
	],
	"../pages/crea-task/crea-task.module": [
		474,
		13
	],
	"../pages/home-progetto/home-progetto.module": [
		475,
		12
	],
	"../pages/home-tm/home-tm.module": [
		476,
		11
	],
	"../pages/invio-ore-sel-task/invio-ore-sel-task.module": [
		477,
		10
	],
	"../pages/invio-ore/invio-ore.module": [
		478,
		9
	],
	"../pages/login/login.module": [
		480,
		8
	],
	"../pages/modifica-budget/modifica-budget.module": [
		479,
		7
	],
	"../pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.module": [
		481,
		6
	],
	"../pages/modifica-risorsa/modifica-risorsa.module": [
		482,
		5
	],
	"../pages/profilo-member/profilo-member.module": [
		484,
		4
	],
	"../pages/selezionaprogetto/selezionaprogetto.module": [
		483,
		3
	],
	"../pages/signup/signup.module": [
		485,
		2
	],
	"../pages/visualizza-members/visualizza-members.module": [
		486,
		1
	],
	"../pages/welcome/welcome.module": [
		487,
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
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelezionaprogettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(488);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.http.get("http://localhost:80/WASP/apiListaProgetti.php", {}, {}).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.progetti = data;
            console.log(data);
        }, function (error) {
            console.log(error); // Error getting the data
        });
        /*this.progetti = [
         { "nome": "progetto 1", "codice": "123abc" },
         { "nome": "progetto 2", "codice": "abc123" },
         { "nome": "progetto 3", "codice": "ABC123" }
         ];*/
    }
    SelezionaprogettoPage.prototype.apriProgetto = function (codice, nome) {
        console.log("Apro progetto: " + codice + " con nome: " + nome);
        this.storage.set("progetto", nome); //<-- TODO qui va inserito il codice
        this.storage.set("codProgetto", codice); //<-- TODO qui va inserito il codice
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__["a" /* HomeProgettoPage */], { "nome": nome, "codice": codice });
    };
    SelezionaprogettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selezionaprogetto',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/'<!--\n  Generated template for the SelezionaprogettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seleziona Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 text-center>Seleziona un progetto</h3>\n\n  <ion-list class="lista-progetti">\n    <ion-item (click)="apriProgetto(progetto.codice, progetto.nome)"  *ngFor="let progetto of progetti">\n      <button class="bottoni-progetto">{{progetto.nome}}</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], SelezionaprogettoPage);
    return SelezionaprogettoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=selezionaprogetto.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_progetto_home_progetto__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_crea_progetto_crea_progetto__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aggiungimember_aggiungimember__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_crea_task_crea_task__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assegna_task_assegna_task__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assegna_task_persona_assegna_task_persona__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modifica_budget_modifica_budget__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modifica_risorsa_modifica_risorsa__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_visualizza_members_visualizza_members__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profilo_member_profilo_member__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_invio_ore_sel_task_invio_ore_sel_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_invio_ore_invio_ore__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(49);
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
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__["a" /* HomeTmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aggiungimember/aggiungimember.module#AggiungimemberPageModule', name: 'AggiungimemberPage', segment: 'aggiungimember', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task-persona/assegna-task-persona.module#AssegnaTaskPersonaPageModule', name: 'AssegnaTaskPersonaPage', segment: 'assegna-task-persona', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task/assegna-task.module#AssegnaTaskPageModule', name: 'AssegnaTaskPage', segment: 'assegna-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-progetto/crea-progetto.module#CreaProgettoPageModule', name: 'CreaProgettoPage', segment: 'crea-progetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-task/crea-task.module#CreaTaskPageModule', name: 'CreaTaskPage', segment: 'crea-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-progetto/home-progetto.module#HomeProgettoPageModule', name: 'HomeProgettoPage', segment: 'home-progetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tm/home-tm.module#HomeTmPageModule', name: 'HomeTmPage', segment: 'home-tm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invio-ore-sel-task/invio-ore-sel-task.module#InvioOreSelTaskPageModule', name: 'InvioOreSelTaskPage', segment: 'invio-ore-sel-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invio-ore/invio-ore.module#InvioOrePageModule', name: 'InvioOrePage', segment: 'invio-ore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-budget/modifica-budget.module#ModificaBudgetPageModule', name: 'ModificaBudgetPage', segment: 'modifica-budget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.module#ModificaRicavoRisorsaPageModule', name: 'ModificaRicavoRisorsaPage', segment: 'modifica-ricavo-risorsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-risorsa/modifica-risorsa.module#ModificaRisorsaPageModule', name: 'ModificaRisorsaPage', segment: 'modifica-risorsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selezionaprogetto/selezionaprogetto.module#SelezionaprogettoPageModule', name: 'SelezionaprogettoPage', segment: 'selezionaprogetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo-member/profilo-member.module#ProfiloMemberPageModule', name: 'ProfiloMemberPage', segment: 'profilo-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizza-members/visualizza-members.module#VisualizzaMembersPageModule', name: 'VisualizzaMembersPage', segment: 'visualizza-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tm_home_tm__["a" /* HomeTmPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(52);
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
            selector: 'page-home-tm',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/home-tm/home-tm.html"*/'<!--\n  Generated template for the HomeTmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home TM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <ion-item *ngFor="let task of tasks">\n      <h2><strong>{{task.nome}}</strong></h2>\n      <h4>{{task.descrizione}}</h4>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/home-tm/home-tm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomeTmPage);
    return HomeTmPage;
}());

//# sourceMappingURL=home-tm.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 184,
	"./af.js": 184,
	"./ar": 185,
	"./ar-dz": 186,
	"./ar-dz.js": 186,
	"./ar-kw": 187,
	"./ar-kw.js": 187,
	"./ar-ly": 188,
	"./ar-ly.js": 188,
	"./ar-ma": 189,
	"./ar-ma.js": 189,
	"./ar-sa": 190,
	"./ar-sa.js": 190,
	"./ar-tn": 191,
	"./ar-tn.js": 191,
	"./ar.js": 185,
	"./az": 192,
	"./az.js": 192,
	"./be": 193,
	"./be.js": 193,
	"./bg": 194,
	"./bg.js": 194,
	"./bn": 195,
	"./bn.js": 195,
	"./bo": 196,
	"./bo.js": 196,
	"./br": 197,
	"./br.js": 197,
	"./bs": 198,
	"./bs.js": 198,
	"./ca": 199,
	"./ca.js": 199,
	"./cs": 200,
	"./cs.js": 200,
	"./cv": 201,
	"./cv.js": 201,
	"./cy": 202,
	"./cy.js": 202,
	"./da": 203,
	"./da.js": 203,
	"./de": 204,
	"./de-at": 205,
	"./de-at.js": 205,
	"./de-ch": 206,
	"./de-ch.js": 206,
	"./de.js": 204,
	"./dv": 207,
	"./dv.js": 207,
	"./el": 208,
	"./el.js": 208,
	"./en-au": 209,
	"./en-au.js": 209,
	"./en-ca": 210,
	"./en-ca.js": 210,
	"./en-gb": 211,
	"./en-gb.js": 211,
	"./en-ie": 212,
	"./en-ie.js": 212,
	"./en-nz": 213,
	"./en-nz.js": 213,
	"./eo": 214,
	"./eo.js": 214,
	"./es": 215,
	"./es-do": 216,
	"./es-do.js": 216,
	"./es.js": 215,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 222,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 222,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./he": 229,
	"./he.js": 229,
	"./hi": 230,
	"./hi.js": 230,
	"./hr": 231,
	"./hr.js": 231,
	"./hu": 232,
	"./hu.js": 232,
	"./hy-am": 233,
	"./hy-am.js": 233,
	"./id": 234,
	"./id.js": 234,
	"./is": 235,
	"./is.js": 235,
	"./it": 236,
	"./it.js": 236,
	"./ja": 237,
	"./ja.js": 237,
	"./jv": 238,
	"./jv.js": 238,
	"./ka": 239,
	"./ka.js": 239,
	"./kk": 240,
	"./kk.js": 240,
	"./km": 241,
	"./km.js": 241,
	"./kn": 242,
	"./kn.js": 242,
	"./ko": 243,
	"./ko.js": 243,
	"./ky": 244,
	"./ky.js": 244,
	"./lb": 245,
	"./lb.js": 245,
	"./lo": 246,
	"./lo.js": 246,
	"./lt": 247,
	"./lt.js": 247,
	"./lv": 248,
	"./lv.js": 248,
	"./me": 249,
	"./me.js": 249,
	"./mi": 250,
	"./mi.js": 250,
	"./mk": 251,
	"./mk.js": 251,
	"./ml": 252,
	"./ml.js": 252,
	"./mr": 253,
	"./mr.js": 253,
	"./ms": 254,
	"./ms-my": 255,
	"./ms-my.js": 255,
	"./ms.js": 254,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./th": 282,
	"./th.js": 282,
	"./tl-ph": 283,
	"./tl-ph.js": 283,
	"./tlh": 284,
	"./tlh.js": 284,
	"./tr": 285,
	"./tr.js": 285,
	"./tzl": 286,
	"./tzl.js": 286,
	"./tzm": 287,
	"./tzm-latn": 288,
	"./tzm-latn.js": 288,
	"./tzm.js": 287,
	"./uk": 289,
	"./uk.js": 289,
	"./ur": 290,
	"./ur.js": 290,
	"./uz": 291,
	"./uz-latn": 292,
	"./uz-latn.js": 292,
	"./uz.js": 291,
	"./vi": 293,
	"./vi.js": 293,
	"./x-pseudo": 294,
	"./x-pseudo.js": 294,
	"./yo": 295,
	"./yo.js": 295,
	"./zh-cn": 296,
	"./zh-cn.js": 296,
	"./zh-hk": 297,
	"./zh-hk.js": 297,
	"./zh-tw": 298,
	"./zh-tw.js": 298
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
webpackContext.id = 425;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_progetto_home_progetto__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_crea_progetto_crea_progetto__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_aggiungimember_aggiungimember__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_crea_task_crea_task__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_assegna_task_assegna_task__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visualizza_members_visualizza_members__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invio_ore_sel_task_invio_ore_sel_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_tm_home_tm__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(50);
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
            { title: 'Modifica Budget', component: __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__["a" /* ModificaBudgetPage */], icon: 'ios-cash-outline' },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/app/app.html"*/'<!-- MENU PM -->\n<ion-menu id="loggedPM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgetto" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Generale\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesGenerale" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n\n\n</ion-menu>\n\n<!-- MENU TM -->\n<ion-menu id="loggedTM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgettoTM" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/app/app.html"*/
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

/***/ 469:
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(52);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
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
    function HomeProgettoPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('progetto').then(function (progetto) {
            _this.nomeProgetto = progetto;
        });
        this.storage.get('codProgetto').then(function (codice) {
            _this.codiceProgetto = codice;
        });
        this.nomeProgetto = navParams.get("nome");
        this.codiceProgetto = navParams.get("codice");
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
    HomeProgettoPage.prototype.ionViewDidLoad = function () {
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
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Spese", "Ricavi"],
                datasets: [{
                        label: 'Spese/Ricavi',
                        data: [2500, 3600],
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
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvas.nativeElement, {
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
            selector: 'page-home-progetto',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/home-progetto/home-progetto.html"*/'<!--\n  Generated template for the HomeProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{nomeProgetto}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<!--\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n-->\n\n    <p text-center>\n        Codice Progetto: <span class="colora">{{codiceProgetto}}</span>\n    </p>\n\n  <ion-card>\n    <ion-card-header>\n      Spese e ricavi giornalieri\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas height="225px"></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Spese e ricavi mensili\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas height="225px"></canvas>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/home-progetto/home-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], HomeProgettoPage);
    return HomeProgettoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home-progetto.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_tm_home_tm__ = __webpack_require__(39);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/macbookpro/Desktop/WASP/src/pages/welcome/welcome.html"*/'<!--\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>WASP</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding id="welcome" class="background">\n  <img src="assets/imgs/logo.png" class="logo"/>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1 text-center>WASP</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button full color="success" (click)="signup()">Registrati</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button full color="lightText" (click)="login()">Accedi</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/Desktop/WASP/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map