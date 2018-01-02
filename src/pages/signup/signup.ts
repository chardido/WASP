import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from "../home/home";


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



export interface UserOptionsRegister {
  username: string,
  password: string,
  nome: string,
  cognome: string,
  tipo: number
}
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup: UserOptionsRegister = {username: '', password:'', nome:'', cognome:'', tipo:0};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }


  logForm() {
    if(this.signup.username != "" && this.signup.password != "" && this.signup.nome != "" && this.signup.cognome != ""){
      this.storage.set('username',this.signup.username);
      this.storage.set('tipo',this.signup.tipo);
      this.navCtrl.setRoot(HomePage);
      console.log(this.signup);
    }else{
      console.log("Controlla di aver completato tutti i campi");
    }
  }

}
