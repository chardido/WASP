import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ConvalidaOreListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convalida-ore-lista',
  templateUrl: 'convalida-ore-lista.html',
})
export class ConvalidaOreListaPage {
  private oreInviate: {nomeUtente: string, nomeAttivita: string, ore: number}[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.oreInviate = [
      {"nomeUtente": "Carlo Di Domenico", "nomeAttivita":"RAD", ore: 13},
      {"nomeUtente": "Fabiano Pecorelli", "nomeAttivita":"SDD", ore: 9},
      {"nomeUtente": "Umberto Picariello", "nomeAttivita":"ODD", ore: 10}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvalidaOreListaPage');
  }


  convalidaOre(nomeUtente: string, ore: number) {
    let alert = this.alertCtrl.create({
      title: 'Convalida Ore',
      message: nomeUtente+" ha dichiarato "+ore+" ore. <br> Vuoi convalidargliele?",
      buttons: [
        {
          text: 'Convalida',
          role: 'cancel',
          handler: () => {
            console.log('Convalida');
          }
        },
        {
          text: 'Non convalidare',
          handler: () => {
            console.log('Non convalida');
          }
        }
      ]
    });
    alert.present();
  }


}
