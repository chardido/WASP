import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SelezionaprogettoPage} from "../selezionaprogetto/selezionaprogetto";
import { Chart } from 'chart.js';


/**
 * Generated class for the HomeProgettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-progetto',
  templateUrl: 'home-progetto.html',
})
export class HomeProgettoPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;


  nomeProgetto: string;
  codiceProgetto: string;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {


    this.storage.get('progetto').then((progetto) => {
      this.nomeProgetto = progetto;
    });

    this.storage.get('codProgetto').then((codice) => {
      this.codiceProgetto = codice;
    });


    this.nomeProgetto = navParams.get("nome");
    this.codiceProgetto = navParams.get("codice");

    setTimeout(this.checkProgettoSelezionato(), 1000);

  }

  ionViewDidLoad() {
    /*

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }

    });
    */


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Spese", "Ricavi"],
        datasets: [{
          label: 'Spese/Ricavi',
          data: [2500, 3600],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
          ]
        }]
      }

    });



    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        datasets: [
          {
            label: "Spese",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,0,0,0.4)",
            borderColor: "rgba(255,0,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1500, 1700, 1800, 1300, 2000, 1230, 1500, 1550, 1600, 1340, 1500, 2300],
            spanGaps: false,
          },
          {




            label: "Ricavi",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1700, 1800, 1850, 1500, 1700, 1300, 1600, 1600, 1500, 1400, 1700, 1800],
            spanGaps: false,
          }
        ]
      }

    });


  }


  checkProgettoSelezionato(){
    this.storage.get('progetto').then((progetto) => {
      if (progetto == null && this.nomeProgetto == null) {
        console.log("NON HAI SCELTO");
        this.navCtrl.setRoot(SelezionaprogettoPage);
      } else {
        this.nomeProgetto = progetto;
        console.log("Progetto aperto: "+progetto);
      }
    });
  }


}
