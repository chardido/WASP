import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  creaTask(){
    if(this.task.nome != "" && this.task.descrizione != ""){
      console.log("Nuovo task: "+this.task.nome+ "; Descrizione: "+this.task.descrizione);
    }

  }


}
