import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../welcome/welcome";
import {DettaglioTaskPage} from "../dettaglio-task/dettaglio-task";

/**
 * Generated class for the HomeTmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tm',
  templateUrl: 'home-tm.html',
})
export class HomeTmPage {
  private username: string;
  private tasks: { attivita: string, dataInizio: string, id: number}[];
  private notifiche: { titolo: string, descrizione: string, data:string}[];



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    setTimeout(this.checkLogin(), 1000);

    this.tasks = [
      { "attivita": "Task 1", "dataInizio": "01/01/2018", "id": 1},
      { "attivita": "Task 2", "dataInizio": "02/01/2018", "id": 2},
      { "attivita": "Task 3", "dataInizio": "03/01/2018", "id": 3}
    ];

    this.notifiche = [
      {"titolo":"Task", "descrizione":"Ti è stato assegnato un nuovo task", "data":"03/01/2018"},
      {"titolo":"Comunicazione Ore", "descrizione":"Le ore comunicate per il Task 1 sono state accettate", "data":"02/01/2018"},
      {"titolo":"Comunicazione Ore", "descrizione":"Le ore comunicate per il Task 2 sono state rifiutate", "data":"01/01/2018"},
    ];
  }

  dettaglioTask(attivita: string, dataInizio: string){
    /**
     * TODO - BISOGNA PASSARE L'ID DEL TASK, E POI PRENDERSELO DAL DB
     */

    this.navCtrl.push(DettaglioTaskPage, {"attivita":attivita, "dataInizio":dataInizio});
  }

  checkLogin(){
    this.storage.get('username').then((name) => {
      if (name == null) {
        this.navCtrl.setRoot(WelcomePage);
      } else {
        this.username = name;
        console.log(this.username)
      }
    });
  }
}

