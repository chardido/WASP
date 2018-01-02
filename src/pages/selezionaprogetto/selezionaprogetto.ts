import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomeProgettoPage} from "../home-progetto/home-progetto";

/**
 * Generated class for the SelezionaprogettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-selezionaprogetto',
  templateUrl: 'selezionaprogetto.html',
})
export class SelezionaprogettoPage {

  private progetti: { nome: string, codice: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    /*
    I progetti verranno presi tramite chiamata GET
     */

    this.progetti = [
      { "nome": "progetto 1", "codice": "123abc" },
      { "nome": "progetto 2", "codice": "abc123" },
      { "nome": "progetto 3", "codice": "ABC123" }
    ];

  }

  apriProgetto(codice: string, nome:string){
    console.log("Apro progetto: "+codice+" con nome: "+nome);
    this.storage.set("progetto",nome); //<-- TODO qui va inserito il codice
    this.navCtrl.setRoot(HomeProgettoPage, {"nome": nome, "codice": codice});
  }

}
