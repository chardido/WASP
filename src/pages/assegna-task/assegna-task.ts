import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AssegnaTaskPersonaPage} from "../assegna-task-persona/assegna-task-persona";
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";

/**
 * Generated class for the AssegnaTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assegna-task',
  templateUrl: 'assegna-task.html',
})
export class AssegnaTaskPage {
  private tasks: { nome: string, descrizione: string }[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    setTimeout(this.checkProgettoSelezionato(), 1000);


    /*
     I tasks verranno presi tramite chiamata GET
     */

    this.tasks = [
      { "nome": "Task1", "descrizione": "Questo è il task numero 1" },
      { "nome": "Task2", "descrizione": "Questo è il task numero 2" },
      { "nome": "Task3", "descrizione": "Questo è il task numero 3" }
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


  //todo - al posto del task gli sarà passato l'id
  assegnaTask(task: string){
    this.navCtrl.push(AssegnaTaskPersonaPage, {"task": task});
    console.log("Task selezionato: "+task);
  }
}
