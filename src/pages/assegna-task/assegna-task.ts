import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AssegnaTaskPersonaPage} from "../assegna-task-persona/assegna-task-persona";

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    /*
     I tasks verranno presi tramite chiamata GET
     */

    this.tasks = [
      { "nome": "Task1", "descrizione": "Questo è il task numero 1" },
      { "nome": "Task2", "descrizione": "Questo è il task numero 2" },
      { "nome": "Task3", "descrizione": "Questo è il task numero 3" }
    ];
  }

  //todo - al posto del task gli sarà passato l'id
  assegnaTask(task: string){
    this.navCtrl.push(AssegnaTaskPersonaPage, {"task": task});
    console.log("Task selezionato: "+task);
  }
}
