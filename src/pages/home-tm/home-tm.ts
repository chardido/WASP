import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../welcome/welcome";

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
  private tasks: { nome: string, descrizione: string}[];
  private notifiche: { titolo: string, descrizione: string, data:string}[];



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    setTimeout(this.checkLogin(), 1000);

    this.tasks = [
      { "nome": "Task 1", "descrizione": "Questa è la descrizione del task 1"},
      { "nome": "Task 2", "descrizione": "Questa è la descrizione del task 2"},
      { "nome": "Task 3", "descrizione": "Questa è la descrizione del task 3"}
    ];

    this.notifiche = [
      {"titolo":"Task", "descrizione":"Ti è stato assegnato un nuovo task", "data":"03/01/2018"},
      {"titolo":"Comunicazione Ore", "descrizione":"Le ore comunicate per il Task 1 sono state accettate", "data":"02/01/2018"},
      {"titolo":"Comunicazione Ore", "descrizione":"Le ore comunicate per il Task 2 sono state rifiutate", "data":"01/01/2018"},
    ];
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

