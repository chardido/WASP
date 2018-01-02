import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomeProgettoPage} from "../home-progetto/home-progetto";


/**
 * Generated class for the CreaProgettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crea-progetto',
  templateUrl: 'crea-progetto.html',
})
export class CreaProgettoPage {
  nomeProgetto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  creaProgetto(){
    console.log("progetto creato: "+this.nomeProgetto);
    this.storage.set("progetto", this.nomeProgetto); //<-- TODO qui va inserito il codice
    this.navCtrl.setRoot(HomeProgettoPage, {"nome": this.nomeProgetto, "codice": ""});
  }

}
