import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfiloMemberPage} from "../profilo-member/profilo-member";
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";

/**
 * Generated class for the VisualizzaMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizza-members',
  templateUrl: 'visualizza-members.html',
})
export class VisualizzaMembersPage {
  private utenti: { nome: string, username: string, ruolo: string,costoG: number, ricavoG: number}[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    setTimeout(this.checkProgettoSelezionato(), 1000);

    this.utenti = [
      { "nome": "Carlo Di Domenico", "username": "chardido", "ruolo": "Team Manager","costoG": 1200, "ricavoG": 1400 },
      { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli", "ruolo": "Team Member", "costoG": 300, "ricavoG": 350 },
      { "nome": "Umberto Picariello", "username": "umbertopic", "ruolo": "Team Member", "costoG" : 300, "ricavoG": 400 }
    ];

  }

  checkProgettoSelezionato(){
    this.storage.get('progetto').then((progetto) => {
      if (progetto == null) {
        console.log("Seleziona il progetto prima di procedere");
        this.navCtrl.setRoot(SelezionaprogettoPage);
      }
    });
  }

  selezionaPersona(nome:string, ruolo:string, costo:number, ricavo:number){
    this.navCtrl.push(ProfiloMemberPage, {"nome":nome,"ruolo":ruolo,"costo":costo,"ricavo":ricavo});
    console.log("Selezionato: "+nome);
  }

}
