import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModificaRicavoRisorsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifica-ricavo-risorsa',
  templateUrl: 'modifica-ricavo-risorsa.html',
})
export class ModificaRicavoRisorsaPage {
  nuovoRicavo: number;
  nomeMember: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nomeMember = this.navParams.get("nome");
  }


  modifica(){
    this.navCtrl.pop();
  }

}
