import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../welcome/welcome";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;

  constructor(public navCtrl: NavController, private storage: Storage) {

    setTimeout(this.checkLogin(), 1000);
    /*
    Check login & get username
     */





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
