import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the InvioOrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invio-ore',
  templateUrl: 'invio-ore.html',
})
export class InvioOrePage {
  taskSelezionato: string;
  oreInserite: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertControl: AlertController) {
    this.taskSelezionato = this.navParams.get("task");
  }

  comunicaOre(){
    if(this.oreInserite != null){
      let alert = this.alertControl.create({
        title: 'Ore comunicate',
        subTitle: ' Le ore sono state comunicate con successo.',
        buttons: ['Continua']
      });
      alert.present();
       console.log("Comunicate "+this.oreInserite+" ore per il task: "+this.taskSelezionato);
    }
  }


}
