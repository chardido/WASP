webpackJsonp([15],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungimemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
            selector: 'page-aggiungimember',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/aggiungimember/aggiungimember.html"*/'<!--\n  Generated template for the AggiungimemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aggiungi Team Member</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar placeholder="Cerca Utente Per Username" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <div padding>\n    <p text-center>\n      Aggiungi un Team Member al tuo progetto!\n    </p>\n\n    <ion-list>\n      <button ion-item (click)="aggiungiUtente(utente.username)" *ngFor="let utente of utenti">\n        <h2> <strong>{{ utente.username }} </strong></h2>\n        <h3> {{ utente.nome }} </h3>\n      </button>\n    </ion-list>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/aggiungimember/aggiungimember.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AggiungimemberPage);
    return AggiungimemberPage;
}());

//# sourceMappingURL=aggiungimember.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPersonaPage; });
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
            selector: 'page-assegna-task-persona',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/'<!--\n  Generated template for the AssegnaTaskPersonaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Seleziona il team member a cui assegnare il task selezionato\n  </p>\n  <br>\n\n  <ion-list>\n    <button ion-item (click)="assegnaTask(utente.username)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome }} </strong></h2>\n      <h3> {{ utente.username }} </h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costoG }}€</strong></h4>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task-persona/assegna-task-persona.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AssegnaTaskPersonaPage);
    return AssegnaTaskPersonaPage;
}());

//# sourceMappingURL=assegna-task-persona.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssegnaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assegna_task_persona_assegna_task_persona__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
            selector: 'page-assegna-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task/assegna-task.html"*/'<!--\n  Generated template for the AssegnaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assegna task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<p text-center>\n  Seleziona il task da assegnare tra quelli disponibili\n</p>\n  <br>\n  <ion-list>\n    <button ion-item (click)="assegnaTask(task.nome)" *ngFor="let task of tasks">\n      <h2> <strong>{{ task.nome}} </strong></h2>\n      <h3> {{ task.descrizione }} </h3>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/assegna-task/assegna-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AssegnaTaskPage);
    return AssegnaTaskPage;
}());

//# sourceMappingURL=assegna-task.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(42);
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
    function CreaProgettoPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    CreaProgettoPage.prototype.creaProgetto = function () {
        console.log("progetto creato: " + this.nomeProgetto);
        this.storage.set("progetto", this.nomeProgetto); //<-- TODO qui va inserito il codice
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__["a" /* HomeProgettoPage */], { "nome": this.nomeProgetto, "codice": "" });
    };
    CreaProgettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crea-progetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-progetto/crea-progetto.html"*/'<!--\n  Generated template for the CreaProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nome del progetto <br>\n    Successivamente recati alla <a href="www.google.it">pagina</a> e importa il progetto in formato XML.\n  </p>\n  <form (ngSubmit)="creaProgetto()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Nome progetto</ion-label>\n      <ion-input type="text" [(ngModel)]="nomeProgetto" name="nome"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea progetto</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-progetto/crea-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CreaProgettoPage);
    return CreaProgettoPage;
}());

//# sourceMappingURL=crea-progetto.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
            selector: 'page-crea-task',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-task/crea-task.html"*/'<!--\n  Generated template for the CreaTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crea task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p text-center>\n  Completa i dati e inserisci un nuovo task\n</p>\n\n  <form (ngSubmit)="creaTask()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="task.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descrizione</ion-label>\n      <ion-textarea [(ngModel)]="task.descrizione" name="descrizione" placeholder="Inserisci una descrizione"></ion-textarea>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Crea Task</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/crea-task/crea-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreaTaskPage);
    return CreaTaskPage;
}());

//# sourceMappingURL=crea-task.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(83);
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
    function LoginPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
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
                if (data['_body'] == 1) {
                    _this.storage.set('username', _this.login.username);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
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
    function SignupPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
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
                    _this.storage.set('tipo', _this.signup.tipo);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrati</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cognome</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.cognome" name="cognome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="signup.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signup.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="signup.tipo" name="select">\n        <ion-option value="0">Project Manager</ion-option>\n        <ion-option value="1">Team Member</ion-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Registrati</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaBudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
            selector: 'page-modifica-budget',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-budget/modifica-budget.html"*/'<!--\n  Generated template for the ModificaBudgetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modifica Budget</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Inserisci il nuovo budget per il progetto: <strong>{{nomeProgetto}}</strong>\n  </p>\n\n  <form (ngSubmit)="modificaBudget()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Budget</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoBudget" name="budget"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Budget</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-budget/modifica-budget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModificaBudgetPage);
    return ModificaBudgetPage;
}());

//# sourceMappingURL=modifica-budget.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRicavoRisorsaPage; });
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
            selector: 'page-modifica-ricavo-risorsa',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/'<!--\n  Generated template for the ModificaRicavoRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Modifica Ricavo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Ricavo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoRicavo" name="ricavo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Ricavo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModificaRicavoRisorsaPage);
    return ModificaRicavoRisorsaPage;
}());

//# sourceMappingURL=modifica-ricavo-risorsa.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaRisorsaPage; });
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
            selector: 'page-modifica-risorsa',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/'<!--\n  Generated template for the ModificaRisorsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Modifica Costo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="modifica()" style="margin-top: 50px;!important;">\n    <ion-item>\n      <ion-label>Costo</ion-label>\n      <ion-input type="number" pattern="[0-9]*" [(ngModel)]="nuovoCosto" name="costo"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button type="submit" block>Modifica Costo</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/modifica-risorsa/modifica-risorsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModificaRisorsaPage);
    return ModificaRisorsaPage;
}());

//# sourceMappingURL=modifica-risorsa.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifica_risorsa_modifica_risorsa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(114);
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
            selector: 'page-profilo-member',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/profilo-member/profilo-member.html"*/'<!--\n  Generated template for the ProfiloMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <h2>Informazioni</h2>\n    <ion-item>\n      <h4> Nome <span float-right><strong>{{ nomeMembro }} </strong></span></h4>\n    </ion-item>\n    <button ion-item (click)="modificaCosto()">\n      <h4>Costo <span float-right><strong>{{ costoMembro }}€/gg</strong></span></h4>\n    </button>\n    <button ion-item (click)="modificaRicavo()">\n      <h4>Ricavo <span float-right><strong>{{ ricavoMembro }}€/gg</strong></span></h4>\n    </button>\n  </ion-list>\n\n  <h2>Task in corso</h2>\n  <ion-list>\n    <ion-item *ngFor="let task of tasks">\n      <h2>{{task.nome}}</h2>\n      <h4>{{task.descrizione}}</h4>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/profilo-member/profilo-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfiloMemberPage);
    return ProfiloMemberPage;
}());

//# sourceMappingURL=profilo-member.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_member_profilo_member__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
            selector: 'page-visualizza-members',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/visualizza-members/visualizza-members.html"*/'<!--\n  Generated template for the VisualizzaMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p text-center>\n    Seleziona un membro per visualizzarne le informazioni\n  </p>\n<br>\n  <ion-list>\n    <button ion-item (click)="selezionaPersona(utente.nome, utente.ruolo, utente.costoG, utente.ricavoG)" *ngFor="let utente of utenti">\n      <h2> <strong>{{ utente.nome }} </strong></h2>\n      <h3> <strong>{{ utente.ruolo }} </strong></h3>\n      <h4> Costo giornaliero: <strong>{{ utente.costoG }}€</strong></h4>\n      <h4> Ricavo giornaliero: <strong>{{ utente.ricavoG }}€</strong></h4>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/visualizza-members/visualizza-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], VisualizzaMembersPage);
    return VisualizzaMembersPage;
}());

//# sourceMappingURL=visualizza-members.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aggiungimember/aggiungimember.module": [
		292,
		34
	],
	"../pages/assegna-task-persona/assegna-task-persona.module": [
		293,
		33
	],
	"../pages/assegna-task/assegna-task.module": [
		294,
		32
	],
	"../pages/crea-progetto/crea-progetto.module": [
		295,
		31
	],
	"../pages/crea-task/crea-task.module": [
		296,
		30
	],
	"../pages/home-progetto/home-progetto.module": [
		297,
		29
	],
	"../pages/home-tm/home-tm.module": [
		307,
		19
	],
	"../pages/invio-ore-sel-task/invio-ore-sel-task.module": [
		308,
		17
	],
	"../pages/invio-ore/invio-ore.module": [
		309,
		18
	],
	"../pages/login/login.module": [
		298,
		28
	],
	"../pages/modifica-budget/modifica-budget.module": [
		299,
		27
	],
	"../pages/modifica-ricavo-risorsa/modifica-ricavo-risorsa.module": [
		300,
		26
	],
	"../pages/modifica-risorsa/modifica-risorsa.module": [
		301,
		25
	],
	"../pages/profilo-member/profilo-member.module": [
		302,
		24
	],
	"../pages/selezionaprogetto/selezionaprogetto.module": [
		303,
		23
	],
	"../pages/signup/signup.module": [
		304,
		22
	],
	"../pages/visualizza-members/visualizza-members.module": [
		305,
		21
	],
	"../pages/welcome/welcome.module": [
		306,
		20
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelezionaprogettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__ = __webpack_require__(42);
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
var SelezionaprogettoPage = (function () {
    function SelezionaprogettoPage(navCtrl, navParams, storage) {
        /*
        I progetti verranno presi tramite chiamata GET
         */
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.progetti = [
            { "nome": "progetto 1", "codice": "123abc" },
            { "nome": "progetto 2", "codice": "abc123" },
            { "nome": "progetto 3", "codice": "ABC123" }
        ];
    }
    SelezionaprogettoPage.prototype.apriProgetto = function (codice, nome) {
        console.log("Apro progetto: " + codice + " con nome: " + nome);
        this.storage.set("progetto", nome); //<-- TODO qui va inserito il codice
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_progetto_home_progetto__["a" /* HomeProgettoPage */], { "nome": nome, "codice": codice });
    };
    SelezionaprogettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selezionaprogetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/'<!--\n  Generated template for the SelezionaprogettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seleziona Progetto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 text-center>Seleziona un progetto</h3>\n\n  <ion-list class="lista-progetti">\n    <ion-item (click)="apriProgetto(progetto.codice, progetto.nome)"  *ngFor="let progetto of progetti">\n      <button class="bottoni-progetto">{{progetto.nome}}</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/selezionaprogetto/selezionaprogetto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SelezionaprogettoPage);
    return SelezionaprogettoPage;
}());

//# sourceMappingURL=selezionaprogetto.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_progetto_home_progetto__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_crea_progetto_crea_progetto__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aggiungimember_aggiungimember__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_crea_task_crea_task__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assegna_task_assegna_task__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assegna_task_persona_assegna_task_persona__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modifica_budget_modifica_budget__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modifica_risorsa_modifica_risorsa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_visualizza_members_visualizza_members__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profilo_member_profilo_member__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(83);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aggiungimember/aggiungimember.module#AggiungimemberPageModule', name: 'AggiungimemberPage', segment: 'aggiungimember', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task-persona/assegna-task-persona.module#AssegnaTaskPersonaPageModule', name: 'AssegnaTaskPersonaPage', segment: 'assegna-task-persona', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assegna-task/assegna-task.module#AssegnaTaskPageModule', name: 'AssegnaTaskPage', segment: 'assegna-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-progetto/crea-progetto.module#CreaProgettoPageModule', name: 'CreaProgettoPage', segment: 'crea-progetto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crea-task/crea-task.module#CreaTaskPageModule', name: 'CreaTaskPage', segment: 'crea-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-progetto/home-progetto.module#HomeProgettoPageModule', name: 'HomeProgettoPage', segment: 'home-progetto', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_20__pages_modifica_ricavo_risorsa_modifica_ricavo_risorsa__["a" /* ModificaRicavoRisorsaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_progetto_home_progetto__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_crea_progetto_crea_progetto__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_aggiungimember_aggiungimember__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_crea_task_crea_task__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_assegna_task_assegna_task__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visualizza_members_visualizza_members__ = __webpack_require__(117);
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
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pagesProgetto = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_progetto_home_progetto__["a" /* HomeProgettoPage */], icon: 'ios-home-outline' },
            { title: 'Aggiungi Team Member', component: __WEBPACK_IMPORTED_MODULE_9__pages_aggiungimember_aggiungimember__["a" /* AggiungimemberPage */], icon: 'ios-person-add-outline' },
            { title: 'Crea Task', component: __WEBPACK_IMPORTED_MODULE_10__pages_crea_task_crea_task__["a" /* CreaTaskPage */], icon: 'ios-add-outline' },
            { title: 'Assegna Task', component: __WEBPACK_IMPORTED_MODULE_11__pages_assegna_task_assegna_task__["a" /* AssegnaTaskPage */], icon: 'ios-person-add-outline' },
            { title: 'Visualizza Members', component: __WEBPACK_IMPORTED_MODULE_13__pages_visualizza_members_visualizza_members__["a" /* VisualizzaMembersPage */], icon: 'ios-people-outline' },
            { title: 'Modifica Budget', component: __WEBPACK_IMPORTED_MODULE_12__pages_modifica_budget_modifica_budget__["a" /* ModificaBudgetPage */], icon: 'ios-cash-outline' },
        ];
        this.pagesGenerale = [
            { title: 'Crea Progetto', component: __WEBPACK_IMPORTED_MODULE_8__pages_crea_progetto_crea_progetto__["a" /* CreaProgettoPage */], icon: 'ios-add-outline' },
            { title: 'Seleziona Progetto', component: __WEBPACK_IMPORTED_MODULE_6__pages_selezionaprogetto_selezionaprogetto__["a" /* SelezionaprogettoPage */], icon: 'ios-list-box-outline' },
        ];
        this.pagesImpostazioni = [
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'log-out', logsOut: true }
        ];
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/app/app.html"*/'<!-- MENU PM -->\n<ion-menu id="loggedPM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgetto" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Generale\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesGenerale" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n\n\n</ion-menu>\n\n<!-- MENU TM -->\n<ion-menu id="loggedTM" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Progetto\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesProgettoTM" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Impostazioni\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pagesImpostazioni" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProgettoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selezionaprogetto_selezionaprogetto__ = __webpack_require__(22);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nomeProgetto = navParams.get("nome");
        console.log(navParams.get("nome"));
        setTimeout(this.checkProgettoSelezionato(), 1000);
    }
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
    HomeProgettoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-progetto',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-progetto/home-progetto.html"*/'<!--\n  Generated template for the HomeProgettoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{nomeProgetto}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Codice Progetto: <span class="colora">{{codiceProgetto}}</span>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home-progetto/home-progetto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomeProgettoPage);
    return HomeProgettoPage;
}());

//# sourceMappingURL=home-progetto.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        setTimeout(this.checkLogin(), 1000);
        /*
        Check login & get username
         */
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 text-center>Benvenuto, {{username}}</h3>\n  <hr/>\n\n  <h2>Notifiche</h2>\n  <ion-list>\n    <ion-item *ngFor="let notifica of notifiche">\n      <h2><strong>{{notifica.titolo}}</strong></h2>\n      <h4>{{notifica.descrizione}}</h4>\n      <h4>{{notifica.data}}</h4>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/umbertopicariello/Documents/GitHub/WASP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(49);
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
        this.storage.get("username").then(function (result) {
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map