import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conteo-gotas',
  templateUrl: 'conteo-gotas.html',
})
export class ConteoGotasPage {

  data = {
    ml: '',
    horas: '',
    constante: '',
    resultado: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() { }

  mostrarFormula() {
    let alert = this.alertCtrl.create({
      title: 'Formula',
      message: 'ml / horas / [constante]',
      buttons: ['Back']
    });
    alert.present()
  }

  gotasTotales() {
    console.log("Entry data:", this.data);
    return this.data.resultado = parseInt(this.data.ml) / parseInt(this.data.horas) / parseInt(this.data.constante);
  }

  borrarResultado() {
    return this.data.ml = '', this.data.horas = '', this.data.constante = '', this.data.resultado = 0;
  }

}
