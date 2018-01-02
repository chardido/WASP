import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SelezionaprogettoPage } from "../selezionaprogetto/selezionaprogetto";

/**
 * Generated class for the ModificaBudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifica-budget',
  templateUrl: 'modifica-budget.html',
})
export class ModificaBudgetPage {
  nomeProgetto: string;
  nuovoBudget: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertControl: AlertController) {

    setTimeout(this.checkProgettoSelezionato(), 1000);
  }

  modificaBudget(){
    if(this.nuovoBudget != null){

      let alert = this.alertControl.create({
        title: 'Budget Modificato',
        subTitle: ' Il budget è stato modificato con successo.',
        buttons: ['Continua']
      });
      alert.present();

      console.log("Nuovo budget: "+this.nuovoBudget+"€")
    }
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
