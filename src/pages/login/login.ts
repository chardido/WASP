import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


export interface UserOptions {
  username: string,
  password: string
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: UserOptions = {username: '', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  logForm() {
    if(this.login.username != "" && this.login.password != ""){
      //effettuare il controllo
      this.storage.set('username',this.login.username);
      this.navCtrl.setRoot(HomePage);
      console.log(this.login);
    }else{
      console.log("Inserisci username e/o password");
    }
  }




}
