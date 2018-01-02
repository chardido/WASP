import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../pages/selezionaprogetto/selezionaprogetto";
import { HomeProgettoPage } from '../pages/home-progetto/home-progetto';
import { CreaProgettoPage } from '../pages/crea-progetto/crea-progetto';
import { AggiungimemberPage } from '../pages/aggiungimember/aggiungimember';
import { CreaTaskPage } from '../pages/crea-task/crea-task';
import { AssegnaTaskPage } from '../pages/assegna-task/assegna-task';
import { AssegnaTaskPersonaPage } from '../pages/assegna-task-persona/assegna-task-persona';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pagesProgetto: Array<{title: string, component: any, icon: string}>;
  pagesGenerale: Array<{title: string, component: any, icon: string}>;
  pagesImpostazioni: Array<{title: string, component: any, icon: string, logsOut?: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesProgetto = [
      { title: 'Home', component: HomeProgettoPage, icon: 'ios-home-outline'},
      { title: 'Aggiungi Team Member', component: AggiungimemberPage, icon: 'ios-person-add-outline'},
      { title: 'Crea Task', component: CreaTaskPage, icon: 'ios-add-outline'},
      { title: 'Assegna Task', component: AssegnaTaskPage, icon: 'ios-person-add-outline'},
    ];

    this.pagesGenerale = [
      { title: 'Crea Progetto', component: CreaProgettoPage, icon: 'ios-add-outline'},
      { title: 'Seleziona Progetto', component: SelezionaprogettoPage, icon: 'ios-list-box-outline'},
    ];

    this.pagesImpostazioni = [
      { title: 'Logout', component: WelcomePage, icon: 'log-out', logsOut: true }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.logout();
    }
  }

  logout(){
    this.storage.clear();
    this.nav.setRoot(WelcomePage);
  }
}
