import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InvioOrePage} from "../invio-ore/invio-ore";
import {Headers, Http, RequestOptions} from "@angular/http";
import {WelcomePage} from "../welcome/welcome";
import {Storage} from "@ionic/storage";


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
    private tasks: { idTask: string, nome: string, attivita: string, dataInizio: string}[];
    private username: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http) {

      this.storage.get('username').then((name) => {
          this.username = name;
          this.chiamataPost();
          //console.log(this.username)
      });

  }

  inviaOre(task: string, idTask: string){
    this.navCtrl.push(InvioOrePage, {"task": task, "idTask": idTask});
    //console.log("Selezionato: "+task+ ", IdTask:" + idTask);
  }

    chiamataPost(){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        let options = new RequestOptions({ headers:headers});

        let postParams = {
            username: this.username
        }

        this.http.post("http://localhost:8888/WASP/apiTasksInCorsoTeamMember.php", postParams, options).map(res => res.json())
            .subscribe(data => {
                this.tasks = data;
            }, error => {
                console.log(error);// Error getting the data
            });
    }


}
