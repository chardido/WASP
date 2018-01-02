import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";

/**
 * Generated class for the CreaTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Task {
  nome: string,
  descrizione: string
}

@IonicPage()
@Component({
  selector: 'page-crea-task',
  templateUrl: 'crea-task.html',
})
export class CreaTaskPage {
  task: Task = {nome: '', descrizione: ''};



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertControl: AlertController) {
    setTimeout(this.checkProgettoSelezionato(), 1000);
  }

  checkProgettoSelezionato(){
    this.storage.get('progetto').then((progetto) => {
      if (progetto == null) {
        console.log("Seleziona il progetto prima di procedere");
        this.navCtrl.setRoot(SelezionaprogettoPage);
      }
    });
  }


  creaTask(){
    if(this.task.nome != "" && this.task.descrizione != ""){
      let alert = this.alertControl.create({
        title: 'Task Creato',
        subTitle: 'Il task è stato creato correttamente.',
        buttons: ['Continua']
      });
      alert.present();
      console.log("Nuovo task: "+this.task.nome+ "; Descrizione: "+this.task.descrizione);
    }

  }


}
