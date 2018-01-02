import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificaRisorsaPage} from "../modifica-risorsa/modifica-risorsa";
import {ModificaRicavoRisorsaPage} from "../modifica-ricavo-risorsa/modifica-ricavo-risorsa";

/**
 * Generated class for the ProfiloMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilo-member',
  templateUrl: 'profilo-member.html',
})
export class ProfiloMemberPage {
  nomeMembro: string;
  costoMembro: number;
  ricavoMembro: number;
  ruoloMembro: string;
  private tasks: { nome: string, descrizione: string}[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nomeMembro = this.navParams.get("nome");
    this.costoMembro = this.navParams.get("costo");
    this.ruoloMembro = this.navParams.get("ruolo");
    this.ricavoMembro = this.navParams.get("ricavo");

    this.tasks = [
      { "nome": "Task 1", "descrizione": "Questa è la descrizione del task 1"},
      { "nome": "Task 2", "descrizione": "Questa è la descrizione del task 2"},
      { "nome": "Task 3", "descrizione": "Questa è la descrizione del task 3"}
    ];
  }

  modificaCosto(){
    this.navCtrl.push(ModificaRisorsaPage, {"nome":this.nomeMembro});
  }
  modificaRicavo(){
    this.navCtrl.push(ModificaRicavoRisorsaPage, {"nome":this.nomeMembro});
  }

}
