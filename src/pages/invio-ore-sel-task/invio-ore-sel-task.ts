import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InvioOrePage} from "../invio-ore/invio-ore";

/**
 * Generated class for the InvioOreSelTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invio-ore-sel-task',
  templateUrl: 'invio-ore-sel-task.html',
})
export class InvioOreSelTaskPage {
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

  inviaOre(task: string){
    this.navCtrl.push(InvioOrePage, {"task": task});
    console.log("Selezionato: "+task);
  }


}
