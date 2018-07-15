import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-uresis-horaria',
  templateUrl: 'uresis-horaria.html',
})
export class UresisHorariaPage {

  data = {
    orina: '',
    peso: '',
    horas: '',
    resultado: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() { }

  resultado() {
    console.log("Entry data:", this.data);
    return this.data.resultado = parseInt(this.data.orina) / parseInt(this.data.peso) / parseInt(this.data.horas);
  }

  mostrarFormula() {
    let alert = this.alertCtrl.create({
      title: 'Fórmula',
      subTitle: 'orina / peso / horas',
      buttons: ['Back']
    });
    alert.present()
  }

  borrarResultado() {
    return this.data.orina = '', this.data.peso = '', this.data.horas = '', this.data.resultado = 0;
  }

}
