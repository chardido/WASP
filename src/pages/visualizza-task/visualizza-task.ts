import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VisualizzaAssociatiTaskPage} from "../visualizza-associati-task/visualizza-associati-task";

/**
 * Generated class for the VisualizzaTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizza-task',
  templateUrl: 'visualizza-task.html',
})
export class VisualizzaTaskPage {
  private tasks: { codice: string, attivita: string, nome: string, dataInizio: string}[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [
        { codice: "1", attivita: "RAD", nome: "NomeProgetto", dataInizio: "2017-10-19T09:00:00"},
        { codice: "2", attivita: "SDD", nome: "NomeProgetto", dataInizio: "2017-10-19T09:00:00"},
        { codice: "3", attivita: "ODD", nome: "NomeProgetto", dataInizio: "2017-10-19T09:00:00"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizzaTaskPage');
  }

  visualizzaAssociati(attivitaTask: string, idTask: string){
      this.navCtrl.push(VisualizzaAssociatiTaskPage,{"attivita":attivitaTask, "idTask":idTask});
  }

}
