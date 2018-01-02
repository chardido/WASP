import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssegnaTaskPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assegna-task-persona',
  templateUrl: 'assegna-task-persona.html',
})
export class AssegnaTaskPersonaPage {
  private utenti: { nome: string, username: string, costoG: number}[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.utenti = [
      { "nome": "Carlo Di Domenico", "username": "chardido", "costoG": 400 },
      { "nome": "Fabiano Pecorelli", "username": "fabianopecorelli", "costoG": 300 },
      { "nome": "Umberto Picariello", "username": "umbertopic", "costoG" : 200 }
    ];
  }

  assegnaTask(username: string){
    var nomeTask = this.navParams.get("task");
    console.log("Task: "+nomeTask+" assegnato a: "+username);
  }


}
