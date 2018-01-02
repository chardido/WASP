import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";


/**
 * Generated class for the HomeProgettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-progetto',
  templateUrl: 'home-progetto.html',
})
export class HomeProgettoPage {

  nomeProgetto: string;
  codiceProgetto: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.nomeProgetto = navParams.get("nome");
    console.log(navParams.get("nome"));

    setTimeout(this.checkProgettoSelezionato(), 1000);



  }

  checkProgettoSelezionato(){
    this.storage.get('progetto').then((progetto) => {
      if (progetto == null && this.nomeProgetto == null) {
        console.log("NON HAI SCELTO");
        this.navCtrl.setRoot(SelezionaprogettoPage);
      } else {
        this.nomeProgetto = progetto;
        console.log("Progetto aperto: "+progetto);
      }
    });
  }


}
