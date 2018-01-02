import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AggiungimemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


export interface Progetto {
  nome: string,
  codice: string
}


@IonicPage()
@Component({
  selector: 'page-aggiungimember',
  templateUrl: 'aggiungimember.html',
})
export class AggiungimemberPage {
  private utenti: { nome: string, username: string}[];
  progetto: Progetto;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertControl: AlertController) {
    this.utenti = [
      { "nome": "Carlo Di Domenico", "username": "chardido" },
      { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli" },
      { "nome": "Umberto Picariello", "username": "umbertopic" }
    ];

    setTimeout(this.checkProgettoSelezionato(), 1000);

  }

  getItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.utenti = this.utenti.filter((v) => {
      if(v.username && q) {
        if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  }

  checkProgettoSelezionato(){
    this.storage.get('progetto').then((progetto) => {
      if (progetto == null) {
        console.log("Seleziona il progetto prima di procedere");
        this.navCtrl.setRoot(SelezionaprogettoPage);
      } else {
        console.log("Aggiungi membro a progetto: "+progetto);
        this.progetto = {nome: progetto, codice: ""}
      }
    });
  }

  aggiungiUtente(username: string){

    let alert = this.alertControl.create({
      title: 'Utente aggiunto',
      subTitle: username+ ' è stato aggiunto al team.',
      buttons: ['Continua']
    });
    alert.present();
    console.log("Aggiungo: "+username+" al progetto: "+this.progetto.nome)
  }


}
