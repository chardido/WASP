import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomeProgettoPage} from "../home-progetto/home-progetto";
import {Http, Headers, RequestOptions} from '@angular/http';

/**
 * Generated class for the SelezionaprogettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-selezionaprogetto',
  templateUrl: 'selezionaprogetto.html',
})
export class SelezionaprogettoPage {

  private progetti: { nome: string, codice: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http) {

    /*
    I progetti verranno presi tramite chiamata GET
     */

     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     let options = new RequestOptions({ headers:headers});

     let postParams = {
         username: this.login.username,
         password: this.login.password,
     }

     this.http.post("http://localhost:8888/WASP/apiLogin.php", postParams, options)
         .subscribe(data => {
             if(data['_body']=="PM"){
                 this.storage.set('username',this.login.username);
                 this.storage.set('posizione',"PM");
                 this.events.publish('user:pm');
                 this.navCtrl.setRoot(HomePage);
             }else if(data['_body']=="TM"){
                 this.events.publish('user:tm');
                 this.storage.set('username',this.login.username);
                 this.storage.set('posizione',"TM");
                 this.navCtrl.setRoot(HomePage);
             }else{
                 console.log("Inserisci username e/o password CORRETTI");
             }
             //console.log(data);
         }, error => {
             console.log(error);// Error getting the data
         });


    this.progetti = [
      { "nome": "progetto 1", "codice": "123abc" },
      { "nome": "progetto 2", "codice": "abc123" },
      { "nome": "progetto 3", "codice": "ABC123" }
    ];

  }

  apriProgetto(codice: string, nome:string){
    console.log("Apro progetto: "+codice+" con nome: "+nome);
    this.storage.set("progetto",nome); //<-- TODO qui va inserito il codice
    this.navCtrl.setRoot(HomeProgettoPage, {"nome": nome, "codice": codice});
  }

}
